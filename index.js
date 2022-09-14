const express = require('express');
const dotEnv = require('dotenv')
dotEnv.config();

const app = express();


const PORT = 7000;



app.listen(PORT,() =>{
console.log(`Listening to ${PORT}`)
})