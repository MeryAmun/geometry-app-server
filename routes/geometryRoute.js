const express = require('express');
const router = express.Router();

router.get('/geometry',(req, res) =>{

    res.send({name:'server'})
})



router.post('/geometry',(req, res) =>{

    res.send({name:'server'})
})


module.exports = router