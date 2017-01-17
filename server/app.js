/**
 * Created by Lenovo on 30-Dec-16.
 */
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, "../client")));


app.get("/courseList", function (req, res) {
    res.json({
        courses:[
            {
                id: 1,
                image: "../app/assets/Images/defCardImage.png",
                name: "CMPS",
                title: "Introduction to Programming",
                number: 200
            },
            {
                id:1,
                image:  "../app/assets/Images/defCardImage.png",
                name: "CMPS",
                title: "Computer Networks",
                number: 284
            },
            {
                id:2,
                image:  "../app/assets/Images/defCardImage.png",
                name: "CMPS",
                title: "Operating Systems",
                number: 272
            },
            {
                id:3,
                image:  "../app/assets/Images/defCardImage.png",
                name: "CMPS",
                title: "Advanced Algorithms and Data Structures",
                number: 256
            }
        ]
    });


});

http.createServer(app).listen(3000, function (req, res) {
    console.log("Server is running on port 3000");
});
