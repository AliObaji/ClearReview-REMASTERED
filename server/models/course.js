/**
 * Created by Lenovo on 18-Jan-17.
 */
var mongoose = require('mongoose');
var courseSchema = mongoose.Schema({
    // id:{type:Number, required: true},
   name:{type:String, required: true},
    number:{type:Number,required: true},
    title:{type:String, required: true},
    image:{type:String, required:true}
});

courseSchema.methods.speak = function(){
    console.log(this.name + " " + this.number);
};

var Course = mongoose.model("Course",courseSchema);
module.exports = Course;