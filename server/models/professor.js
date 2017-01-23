/**
 * Created by Lenovo on 23-Jan-17.
 */
var mongoose = require('mongoose');

var profSchema = mongoose.Schema({
    firstname:{type:String,required: true},
    lastname: {type:String,required: true},
    department: {type:String,required: true},
    image: {type:String,required: true}
});
var prof = mongoose.model("Professor",profSchema);
module.exports = prof;