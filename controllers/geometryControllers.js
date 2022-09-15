const mongoose = require('mongoose');
const Geometry = require('../models/geometryModel');


const getAllGeometricFigures = async (req, res) => {

    const geomertricFigures =  await Geometry.find()
    res.status(200).json(geomertricFigures)
   
}


const createGeometricFigure = async (req, res) => {
    const allFigures = req.body;
    const newFigure = new Geometry({
        ...allFigures,
    });
await newFigure.save()
res.status(201).json(newFigure);


}





module.exports = {
    getAllGeometricFigures,createGeometricFigure
}