const db = require('../config/connection');
const { User, Item } = require('../models');
const userSeeds = require('./userSeeds.json');
const itemSeeds = require('./itemSeeds.json');

db.once('open', async () => {
  try {
    await Item.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < itemSeeds.length; i++) {
      const { _id, itemAuthor } = await Item.create(itemSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: itemAuthor },
        {
          $addToSet: {
            items: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
