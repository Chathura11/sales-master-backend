import mongoose from "mongoose";

const suplierSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    nic:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false
    },
    phone:{
        type:String,
        required:false
    },
    imageURL:{
        type:String,
        required:true,
        default:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg"
    },
    status:{
        type:Boolean,
        required:true,
        default:true
    }

})


const Suplier = mongoose.model('Suplier',suplierSchema);

export default Suplier;