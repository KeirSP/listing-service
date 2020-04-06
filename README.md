# listing-service

## Keir's Listing Service Thing

### What I/we have learned

I have learned a lot more about how routes and express works. I am beginning to better appreciate the difference between get and post in particular. I didn't realise until today that I could get and post to the same route, which helps a lot.

I have also learned about how to use querystring and I will try to use them more in the future if necessary.

### What challenges I/we overcame
I was struggling a lot with passing context between my submit route and my redirect route. Collapsing the submit route to the home route helped a lot since it reduced the need for an extra URL and could free that up for querystring uses. However in the end I reverted to my original JSDOM loop.

I did this because (thanks to Huseyin) i began using the path.join instead of simply referring to the raw path from my computer, which for reasons known only to express, allowed it to find files on my computer that it was not detecting before. 

After this I could simply serve the results page as desired and then manipulate the divs using JSDOM.

### What I/we struggled with
I was struggling a lot with getting the routes to pass context between them, however as stated above by using the formData variable and maniplating the JSDOM I could get what I wanted.

Understanding the use of querystrings and using the nodejs path module saved me by preventing the ENOENT errors I was experiencing.

I was stuck on this for a very long time since the ways node detects files and file paths locally is very opaque, and I struggled a lot to understand what was going on in the querystring examples givern on stack overflow.

### What I/we would do differently next time
Would probably use a templating engine in future (e.g pug) since this does a lot of the heavy lifting of transferring context around. 