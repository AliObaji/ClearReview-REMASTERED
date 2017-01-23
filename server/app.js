/**
 * Created by Lenovo on 30-Dec-16.
 */
var express = require('express');
var mongoose = require("mongoose");
var http = require('http');
var path = require('path');

var CourseColl = require("./models/course");

var app = express();
mongoose.connect("mongodb://localhost:27017/Elissa");
var db = mongoose.connection;
db.once('open', function() {
    console.log("Connection to Elissa established.");
});
app.use(express.static(path.join(__dirname, "../client")));
// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});


//TODO: when the database is constructed, retrieve those using queries.
// var courses = {courses:[
//     {id:0,image:  "../app/assets/Images/defCardImage.png", name: "CMPS", title: "Introduction to Programming", number: 200},
//     {id:1,image:  "../app/assets/Images/defCardImage.png", name: "CMPS", title: "Computer Networks", number: 284},
//     {id:2,image:  "../app/assets/Images/defCardImage.png", name: "CMPS", title: "Operating Systems", number: 272},
//     {id:3,image:  "../app/assets/Images/defCardImage.png", name: "CMPS", title: "Advanced Algorithms and Data Structures", number: 256}
//     ]};

var professors = {professors:[
    {id:0,firstname: "Fatema", lastname: "Abu Salem", department: "Computer Science", image: "../app/assets/Images/defCardImage.png"},
    {id:1,firstname: "Mohammed", lastname: "Jaber", department: "Computer Science", image: "../app/assets/Images/defCardImage.png"},
    {id:2,firstname: "Ahmad", lastname: "Dhaini", department: "Computer Science", image: "../app/assets/Images/defCardImage.png"},
    {id:3,firstname: "Wassim", lastname: "El-Hajj", department: "Computer Science", image: "../app/assets/Images/defCardImage.png"}
]};

//returns a mock collection of courses
app.get("/courseList", function (req, res) {

    // var cs = [
    //         new CourseColl({id:1,image:  "../app/assets/Images/defCardImage.png", name: "CMPS", title: "Computer Networks", number: 284}),
    //     new CourseColl({id:0,image:  "../app/assets/Images/defCardImage.png", name: "CMPS", title: "Introduction to Programming", number: 200}),
    //     new CourseColl({id:2,image:  "../app/assets/Images/defCardImage.png", name: "CMPS", title: "Operating Systems", number: 272}),
    //     new CourseColl({id:3,image:  "../app/assets/Images/defCardImage.png", name: "CMPS", title: "Advanced Algorithms and Data Structures", number: 256})
    // ];
    //
    // for(var i =0; i<cs.length;i++){
    //     cs[i].save();
    // }

    // CourseColl.remove({},function(err,c){
    //    if (err){console.log(err);}
    // });

    CourseColl.find(function(err,courses){
       if(err){
           console.log(err);
       }
       else{
           res.json({
               courses: courses
           });
       }
    });


});

//returns a mock collection of professors
app.get("/profList",function (req, res) {
   res.json(professors);
});

//function to find a certain course.
app.get('/courseDetails',function (req, res) {
    var arrayFound = courses.courses.filter(function(courses) {
        return courses.id == req.query.id;
    });
    res.json(
        arrayFound[0]
    );
});

http.createServer(app).listen(3000, function (req, res) {
    console.log("Server is running on port 3000");
});
