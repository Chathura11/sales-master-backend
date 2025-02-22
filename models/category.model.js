const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const categorySchema = new Schema({
    name:{
        type:String,
        required:true,
        unique: true
    },

    description:{
        type:String,
        required:false
    },

    imageURL:{
        type:String,
        required:false,
    },

    status:{
        type:Number,
        required:true
    },

    remark:{
        type:String,
        required:false
    }
},{timestamps:true});

const Category = mongoose.model('Category',categorySchema);

module.exports = Category;