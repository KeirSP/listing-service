const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.static('public'));


//considering this flow: serve index.html at 4001 -> on submit trigger app.post and store the sent data in a variable in the server side js, then return newList.html. then manipulate this page with a separate script.js which will fetch the data from the server-side object and display it with jquery

app.get('/', (req, res) => {
    res.sendFile('/public/index.html');
}); 

//use this to serve index.html, rather than the usual app.use(express.static('public'))

app.post('/submit', (req, res) => {
    console.log(req.body);
    //pass request data to form
    //redirect user to success page, i.e. new listing.
}); 

//use this to transfer data from my form to the item listing. there should be a redirect in this route to prevent resubmission.

app.get('/success', (req, res) => {
    //serve success page with customised list item
});

//this route is for getting the newList.html success page after a successful post.

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})