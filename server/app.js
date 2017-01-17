/**
 * Created by Lenovo on 30-Dec-16.
 */
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, "../client")));

//returns a mock collection of courses
app.get("/courseList", function (req, res) {
    res.json({
        courses:[
            {id:0,image:  "../app/assets/Images/defCardImage.png", name: "CMPS", title: "Introduction to Programming", number: 200},
            {id:1,image:  "../app/assets/Images/defCardImage.png", name: "CMPS", title: "Computer Networks", number: 284},
            {id:2,image:  "../app/assets/Images/defCardImage.png", name: "CMPS", title: "Operating Systems", number: 272},
            {id:3,image:  "../app/assets/Images/defCardImage.png", name: "CMPS", title: "Advanced Algorithms and Data Structures", number: 256}
        ]
    });
});

//returns a mock collection of professors
app.get("/profList",function (req, res) {
   res.json({
        professors:[
            {id:0,firstname: "Fatema", lastname: "Abu Salem", department: "Computer Science", image: "../app/assets/Images/defCardImage.png"},
            {id:1,firstname: "Mohammed", lastname: "Jaber", department: "Computer Science", image: "../app/assets/Images/defCardImage.png"},
            {id:2,firstname: "Ahmad", lastname: "Dhaini", department: "Computer Science", image: "../app/assets/Images/defCardImage.png"},
            {id:3,firstname: "Wassim", lastname: "El-Hajj", department: "Computer Science", image: "../app/assets/Images/defCardImage.png"}
        ]
   });
});

http.createServer(app).listen(3000, function (req, res) {
    console.log("Server is running on port 3000");
});
