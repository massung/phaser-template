// import our modules
var express = require('express');
var app = express();

// serve static files
app.use(express.static('www'));

// get the landing page
app.get('/', function(req, res) {
    res.sendFile('index.html', {
        root: './www'
    });
});

// start the server
app.listen(5858, function() {
    console.log('Server started on port 5858!');
});
