const mongoose = require("mongoose");
const { Schema } = mongoose;

const GeometrySchema = new Schema({
    name:String,reqiuired:true,
    dimensionToCalculate:[{_id:mongoose.Types.ObjectId,name:String,value:Number}], required:true,
    availableDimensions:[{name:String,value:Number}], required:true,
    units:[{name:String}],required:true
});

module.exports = mongoose.model('Geometery', GeometrySchema)
