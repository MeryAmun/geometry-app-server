const mongoose = require("mongoose");
const { Schema } = mongoose;

const GeometrySchema = new Schema({
    name:{
        type:String, reqiuired:true,
    }, 
    dimensionToCalculate:
        [{_id:mongoose.Types.ObjectId,name:{ type:String, value:Number, required:true }}],
    availableDimensions:[{name:{ type:String, value:Number, required:true }}],
    units:[{name:{ type:String, required:true }}]
});

module.exports = mongoose.model('Geometery', GeometrySchema)
