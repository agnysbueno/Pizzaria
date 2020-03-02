const pedidoModel = require("../model/Pedido");
const pedidoController = {
    list:(req, res) => {
        res.send(pedidoModel.listarPedidos(registros))
    }, //validar
    indexnew: (req, res) =>{
        res.send("Qual vai ser seu primeiro pedido?");
    }, //validar
    new:(req, res) => {
        let nomeCliente = req.params.nome;
        let pizzas = req.params.pizzas; //verificar
        res.send(pedidoModel.FazerPrimeiroPedido(nomeCliente, ...pizzas))
    }, //validar
    indexadd: (req, res) =>{
        res.send("Adicione um novo pedido à sua conta!");
    }, //validar
    add:(req, res) => {
        let nomeCliente = req.params.nome;
        let pizzas = req.params.pizzas; //verificar
        res.send(pedidoModel.adicionarPedido(nomeCliente, ...pizzas))
    }, //validar
    indexselect: (req, res) =>{
        res.send("Qual cliente você está procurando?");
    }, //validar
    select:(req, res) => {
        let cliente = req.params.nome;
        res.send(pedidoModel.buscarPedidosPorCliente(cliente))
    } //validar
}

module.exports = pedidoController