const pedidos = [];

const guardarPedido = (pedido) => {
    pedidos.push(pedido);
};

const obtenerPedidos = () => {
    return pedidos;
};

module.exports = {
    guardarPedido,
    obtenerPedidos
};