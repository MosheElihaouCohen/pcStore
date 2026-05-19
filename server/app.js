const express = require('express');
const app = express();
const PORT = 5000;
const products = [];


app.get('/', (request, response) => {
    response.json({products})
    response.end();
})


app.listen(PORT, () =>{
    console.log("Server is running...");
})
