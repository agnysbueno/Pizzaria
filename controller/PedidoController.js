const pedidoModel = require("../model/Pedido");
const pedidoController = {
    index:(req, res) => {
        res.send(pedidoModel.listarPedidos())
    }, 
    indexadd: (req, res) =>{
        res.send("Adicione um novo pedido!");
    }, //OK!
    add:(req, res) => {
        let nomeCliente = req.params.nome;
        let pizzas = req.params.pizzas; //verificar
        res.send(pedidoModel.adicionarPedido(nomeCliente, ...pizzas))
    }, //validar
}

module.exports = pedidoController