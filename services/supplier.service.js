const Supplier =require ('../models/supplier.model.js');

exports.AddSupplier = async (data)=>{
    try {
        const supplier = new Supplier(data);
        return await supplier.save();
    } catch (error) {
        throw error;
    }
}

exports.GetAllSuppliers = async (req)=>{
    try {
        const user = req.user;
        const requiredPermission = 'configure_settings';
        const permissionNames = user.role.permissions.map(permission => permission.name);

        if(permissionNames && permissionNames.includes(requiredPermission)){
            return await Supplier.find();
        }else{
            return await Supplier.find({status:true});
        }

    } catch (error) {
        throw error;
    }
}