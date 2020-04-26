const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Iniciando o APP
const app = express();
app.use(express.json());
app.use(cors());

// Inicinado o DB
mongoose.connect('mongodb+srv://uri', { useNewUrlParser: true, useUnifiedTopology: true });
requireDir('./src/models');

const Product = mongoose.model('Product');

// Primeira rota
app.use('/api', require('./src/routes'));
app.listen(3001);