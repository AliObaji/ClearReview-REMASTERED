/**
 * Created by Lenovo on 30-Dec-16.
 */
var express = require('express');
var mongoose = require("mongoose");
var http = require('http');
var path = require('path');

var CourseColl = require("./models/course");
var profColl = require("./models/professor");

var app = express();
mongoose.connect("mongodb://localhost:27017/Elissa");
var db = mongoose.connection;
db.once('open', function() {
    console.log("Connection to Elissa established.");
});
// view engine setup
app.set('views', path.join(__dirname, '../client/dist'));
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, "../client/dist")));
// Make our db accessible to our router

app.get("/test",function(req,res){
    console.log("hi");
});
//TODO: fix issue where I would have multiple results when i search. For course and professor profiles..

//returns course list
app.get("/courseList", function (req, res) {

    // var cs = [
    //         new CourseColl({id:1,image:  "../../../assets/images/defCardImage.png", name: "CMPS", title: "Computer Networks", number: 284}),
    //     new CourseColl({id:0,image:  "../../../assets/images/defCardImage.png", name: "CMPS", title: "Introduction to Programming", number: 200}),
    //     new CourseColl({id:2,image:  "../../../assets/images/defCardImage.png", name: "CMPS", title: "Operating Systems", number: 272}),
    //     new CourseColl({id:3,image:  "../../../assets/images/defCardImage.png", name: "CMPS", title: "Advanced Algorithms and Data Structures", number: 256})
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



//returns professor list
app.get("/profList",function (req, res) {
    // var pc = [
    //     new profColl({id:0,firstname: "Fatema", lastname: "Abu Salem", department: "Computer Science", image: "../../../assets/images/defCardImage.png"}),
    //     new profColl({id:1,firstname: "Mohammed", lastname: "Jaber", department: "Computer Science", image: "../../../assets/images/defCardImage.png"}),
    //     new profColl({id:2,firstname: "Ahmad", lastname: "Dhaini", department: "Computer Science", image: "../../../assets/images/defCardImage.png"}),
    //     new profColl({id:3,firstname: "Wassim", lastname: "El-Hajj", department: "Computer Science", image: "../../../assets/images/defCardImage.png"})
    // ];
    // for(var i =0; i<pc.length;i++){
    //     pc[i].save();
    // }

    // profColl.remove({},function(err,p){
    //    if (err){console.log(err);}
    // });

    profColl.find(function(err,profs){
        if(err){
            console.log(err);
        }
        else{
            res.json({
                professors: profs
            });
        }
    });
});

//function to find a certain course.
app.get('/courseDetails',function (req, res) {

    CourseColl.findById(req.query.id,function(err,myDoc){
       if (err){
           console.log(err);
       }
       else{
           res.json(myDoc);
       }
    });
});

http.createServer(app).listen(3000, function (req, res) {
    console.log("Server is running on port 3000");
});
