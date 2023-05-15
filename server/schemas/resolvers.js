const { AuthenticationError } = require('apollo-server-express');
const { User, Item } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('items');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('items');
        },
        items: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Item.find(params).sort({ createdAt: -1});
        },
        item: async (parent, { itemId }) => {
            return Item.findOne({ _id: itemId});
        }
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError ('Incorrect password!');
            }

            const token = signToken(user);

            return { token, user };
        },
        addItem: async (parent, { itemTitle, itemText, itemAuthor }) => {
            const item = await Item.create({ itemTitle, itemText, itemAuthor });
            
            await User.findOneAndUpdate(
                { username: itemAuthor}, 
                {$addToSet: { items: item._id }}
            );

            return item;
        },
        addResponse: async (parent, { itemId, responseText, responseAuthor, responseEmail }) => {
            return Item.findOneAndUpdate(
                { _id: itemId },
                { $addToSet: { responses: { responseText, responseAuthor, responseEmail }}},
                { new: true, runValidators: true}, 
            );
        },
        removeItem: async (parent, { itemId }) => {
            return Item.findOneAndUpdate(
                { _id: itemId },
                { $pull: { responses: { _id: itemId }}},
                { new: true }
            )
        }
    }
}

module.exports = resolvers;