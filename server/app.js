/**
 * Created by Lenovo on 30-Dec-16.
 */
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname,"../client")));

http.createServer(app).listen(3000,function (req, res) {
    console.log("Server is running on port 3000");
});
