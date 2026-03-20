const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config();
const app = express();
const API_KEY = process.env.API_KEY;
app.get('/', async(req, res) => {
    try{

        const response = await axios.get(` http://api.weatherapi.com/v1current.json?key=${API_KEY}&q=London`);
        res.status(200).json(response.data);

    }catch{
        res.status(500).json('Server error');
    }
});

app.get('/health', async (req, res) =>{
    try{
        res.json("working");
    }catch{
        res.status(500).json("server error");
    }
});

app.listen(8000, () => {
    console.log("server running on 8000");
})
