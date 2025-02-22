const Brand = require('../models/brand.model');


exports.createBrand = async (brandData)=>{
    try{
        const brand = new Brand(brandData);
        return await brand.save();
    }catch(error){
        throw error;
    }
};

exports.getAllBrands = async ()=>{
    try{
        return await Brand.find();
    }catch(error){
        throw error;
    }
};

exports.getBrandByID = async (id)=>{
    try{
        return await Brand.findById(id);
    }catch(error){
        throw error;
    }
};

exports.updateBrand = async (id,brandData)=>{
    try{
        return await Brand.findByIdAndUpdate(id,brandData,{new:true});
    }catch(error){
        throw error;
    }
};

exports.deleteBrand = async (id)=>{
    try{
        return await Brand.findByIdAndDelete(id);
    }catch(error){
        throw error;
    }
};