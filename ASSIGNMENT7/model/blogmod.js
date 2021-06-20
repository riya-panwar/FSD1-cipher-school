const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    heading: {type: String, require: true},
    blog: {type: Number},
    userId: {   
        firstname: {type: String, require:true},
        lastname: {type: String , require:true}
    }
});


module.exports = mongoose.model('User', BlogSchema);