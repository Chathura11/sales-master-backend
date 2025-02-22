const Category = require('../models/category.model');

exports.createCategory = async (categoryData) =>{
    try {
        const cat = new Category(categoryData);
        return await cat.save();
    } catch (error) {
        throw error;
    }
};

exports.getAllCategory = async ()=>{
    try {
        return await Category.find()
    } catch (error) {
        throw error;
    }
};

exports.getCategoryByID = async (id)=>{
    try {
        return await Category.findById(id);
    } catch (error) {
        throw error;
    }
};

exports.updateCategory = async (id,categoryData)=>{
    try {
        return await Category.findByIdAndUpdate(id,categoryData,{new:true});
    } catch (error) {
        throw error;
    }
};

exports.deleteCategory = async (id) =>{
    try {
        return await Category.findByIdAndDelete(id);
    } catch (error) {
        throw error;
    }
};