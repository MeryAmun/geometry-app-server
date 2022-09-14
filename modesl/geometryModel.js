const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GeometrySchema = new Schema({
  rectangle: {
    length: Number,
    width: Number,
    area: String,
    perimeter: String,
  },
  square: {
    length: Number,
    area: String,
    perimeter: String,
  },
  circle: {
    radius: Number,
    area:String,
    circumference:String
  },
  triangle: {
    base: Number,
    sideLeft: Number,
    sideRight: Number,
    height: Number,
    area:String,
    perimeter:String
  },
  
});

module.exports = mongoose.Model('Geometery', GeometrySchema)
