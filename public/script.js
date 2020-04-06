// $(document).ready(function() {
//     axios.get("/submit").then(response => {
//         console.log(response);
//     });
    //$('#listName').append(userData.listName);
    // on load of newList.html I will use jquery and axios to retrieve stored userData from server side and insert it into the divs in my newList.html.

    //i can see why jquery is dying a death currently. templating engines like pug(aka jade) make it a lot easier to inser user-generated data into static pages. currently i am having to do a lot of fetching between front and back end in order to pass in the data I require - if i use a templating engine I can call res.render in express and have the engine automatically populate the relevant fields in my pages and its entirely done on server side.

    //I have abandoned jquery due to being unable to fetch the require object from server side.

    //using querystrings i can now retrieve the data i need from the URL
//});