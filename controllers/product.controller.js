const {CreateProduct,GetAllProducts} = require('../services/product.service');

exports.CreateProduct = async (req,res)=>{
    try {
        const product = await CreateProduct(req.body);
        res.status(200).json({success:1,data:product.id});
    } catch (error) {
        res.status(500).json({success:0,data:error.message})
    }
}

exports.GetAllProducts = async (req,res)=>{
    try {
        const products = await GetAllProducts(req);
        res.status(200).json({success:1,data:products})
    } catch (error) {
        res.status(500).json({success:0,data:error.message})
    }
}