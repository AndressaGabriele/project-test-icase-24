require('dotenv').config();

const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

app.use(bodyParser.json());

const API_SECRET = process.env.API_SECRET;
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

// Rota de login sem fazer validações
app.post('/login', (req, res) => {
    const token = jwt.sign({ user: req.body.user }, API_SECRET);
    res.json({ token });
});

// Rota para buscar vídeos
app.get('/videos', async (req, res) => {
    const { q } = req.query;
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&key=${YOUTUBE_API_KEY}`);
    res.json(response.data); 
});

let favorites = [];

app.post('/favorites', (req, res) => {
    const { video } = req.body;
    favorites.push(video);
    res.json(favorites);
});

app.delete('/favorites', (req, res) => {
    const { videoId } = req.body;
    favorites = favorites.filter(v => v.id !== videoId);
    res.json(favorites);
});

app.get('/favorites', (req, res) => {
    res.json(favorites);
});

app.listen(3002, () => console.log('BFF running on port 3002'));
