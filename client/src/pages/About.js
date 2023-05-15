import React from 'react';

export default function Home () {
    return (
        <main className='p-3 bg-custom-b'>
            <h2 className='p-3'>Welcome!</h2>
            <p className='p-3 text-custom-about'>Facebook buy nothing groups and the Craigslist free page are great resources if you're on a budget or trying to reduce your climate footprint. However, both are location dependent so if you live in a rural area there isn't a lot available. Buy Nothing World solves that problem. Users can share items they're getting rid of with people anywhere by coordinating shipping. </p>  
            <h3 className='p-3'>How does it work?</h3>
            <p className='p-3 text-custom-about'>If you're getting rid of something, head to the homepage. At the top of the page there is a form to fill out, give your item a simple descriptive title and add more details in the description section. If a user responds to your post, you will be able to see the response(s) by clicking on the post. Each response lists the user's email address. If you would like to send your item to that user, send them an email to coordinate shipping details. After you've sent your item off, remove your post from the site with the "remove post" button found on the same page as the responses.</p>
            <p className='p-3 text-custom-about'>If you're looking for items, you'll find a list of all the items available on the homepage. If you see something you like, click on the "see more" button on the post. You'll be brought to a page with the post, any responses that already exist, and a response form. Fill out the response form with a message for the item's owner. Then just wait and see if you get an email from the item's owner. Note: by submitting this form you area agreeing to share your email address with the item's owner. Your email address will not be shared with anyone else. </p>
        </main>
    )
}