const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // Create express app by executing express as a function
const feedRoutes = require('./Routes/feed.js');

// This method is great for data formats or for requests that hold data in the format of xwww form urlencoded, this is the default data type if data is submitted through a <form> post request
// app.use(bodyParser.urlencoded()); 

app.use(bodyParser.json());

// To get rid of CORS error 
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');  // allow all the domains and URLs that must be able to access our server, * means all 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');  // allowing specific methods to be used by the above set origins
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);
app.listen(8080);


// Sometimes, you'll notice two requests showing in the network tab of inspect section
// This is because of the OPTIONS method which is sent by the browser automatically just to check if the requests sent by the user will be allowed