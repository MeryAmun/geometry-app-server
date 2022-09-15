const express = require('express');
const router = express.Router();
const { getAllGeometricFigures, createGeometricFigure } = require('../controllers/geometryControllers')

router.get('/geometry',getAllGeometricFigures)



router.post('/geometry', createGeometricFigure)


module.exports = router