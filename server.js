const express = require('express');
const path = require('path');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Archivos estáticos (HTML)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
const pedidosRoutes = require('./src/routes/pedidoRoutes');
app.use('/', pedidosRoutes);

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});