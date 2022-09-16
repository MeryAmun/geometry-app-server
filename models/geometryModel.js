const mongoose = require("mongoose");
const { Schema } = mongoose;

const GeometrySchema = new Schema({
    figureName:{
        type:String, reqiuired:true,
    }, 
    dimensionsToCalculate:[{ type:String, required:true }],
    availableDimensions:[{type:String,  required:true} ],
    units:[{type:String, required:true }]
});

module.exports = mongoose.model('Geometery', GeometrySchema)
