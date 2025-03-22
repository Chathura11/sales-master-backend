const { AddSupplier,GetAllSuppliers } = require("../services/supplier.service.js");

exports.AddSupplier = async (req,res)=>{
    try {
        const supplier = await AddSupplier(req.body);
        res.status(200).json({success:1,data:supplier.id});
    } catch (error) {
        res.status(500).json({success:0,data:error}); 
    }
};

exports.GetAllSuppliers = async(req,res)=>{
    try {
        const suppliers = await GetAllSuppliers(req);
        res.status(200).json({success:1,data:suppliers});
    } catch (error) {
        res.status(500).json({success:0,data:error}); 
    }
};