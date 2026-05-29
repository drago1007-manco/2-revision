const path = require('path');
const pedidoModel = require('../models/pedidoModel');

// Mostrar formulario
const mostrarFormulario = (req, res) => {

    res.sendFile(
        path.join(__dirname, '../../public/index.html')
    );
};

// Guardar pedido
const crearPedido = (req, res) => {

    const { nombreCliente, tamano, ingredientes } = req.body;

    const nuevoPedido = {
        nombreCliente,
        tamano,
        ingredientes
    };

    pedidoModel.guardarPedido(nuevoPedido);

    res.redirect('/listaPedidos');
};

// Mostrar pedidos
const mostrarPedidos = (req, res) => {

    const pedidos = pedidoModel.obtenerPedidos();

    let html = `
        <h1>Lista de Pedidos</h1>
        <a href="/">Nuevo Pedido</a>
        <hr>
    `;

    pedidos.forEach(p => {
        html += `
            <div>
                <h3>${p.nombreCliente}</h3>
                <p><b>Tamaño:</b> ${p.tamano}</p>
                <p><b>Ingredientes:</b> ${p.ingredientes}</p>
            </div>
            <hr>
        `;
    });

    res.send(html);
};

module.exports = {
    mostrarFormulario,
    crearPedido,
    mostrarPedidos
};