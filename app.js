const express = require("express");
const app = express();
const path = require("path")
const { JSDOM } = require('jsdom')
const querystring = require('querystring')

const PORT = process.env.PORT || 4001;

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//considering this flow: serve index.html at 4001 -> on submit trigger app.post and store the sent data in a variable in the server side js, then return newList.html. then manipulate this page with a separate script.js which will fetch the data from the server-side object and display it with jquery

//this has proven extremely difficult, as it is very hard to manage a redirect and pass information between routes.

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
}) 

//use this to serve index.html, rather than the usual app.use(express.static('public'))

//var formData = null;
//set formData as a global variable so it can be accessed by newList.html's script.js

app.post('/', (req, res) => {
    //console.log(querystring.stringify(req.body));
    //userData = querystring.stringify(req.body);
    formData = req.body;
    //pass request data to form
    res.redirect('/results'); // + userData);
    //redirect user to success page, i.e. new listing.
}); 

//use this to transfer data from my form to the i   tem listing. there should be a redirect in this route to prevent resubmission.

app.get('/results', (req, res) => {
    //console.log(userData);
    //res.sendFile(path.join(__dirname, "public/newList.html"))

    JSDOM.fromFile(path.join(__dirname, "public/newList.html")).then((dom) => {
        dom.window.document.getElementById('listName').innerHTML = formData.listName;
        dom.window.document.getElementById('listPrice').innerHTML = formData.listPrice;
        dom.window.document.getElementById('listDescription').innerHTML = formData.listDescription;
        res.send(dom.serialize());
    });
    
    //res.sendFile('newList.html' , {root : 'public'});
    //serve success page with customised list item
});

//this route is for getting the newList.html success page after a successful post.

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})