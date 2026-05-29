const express = require('express');
const router = express.Router();

const {
    mostrarFormulario,
    crearPedido,
    mostrarPedidos
} = require('../controllers/pedidoController');

// Formulario
router.get('/', mostrarFormulario);

// Guardar pedido
router.post('/listaPedidos', crearPedido);

// Mostrar lista
router.get('/listaPedidos', mostrarPedidos);

module.exports = router;