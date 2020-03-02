const pedidoModel = require("../model/Pedido");
const pedidoController = {
    list:(req, res) => {
        res.send(pedidoModel.listarPedidos(pedidoModel.registros))
    }, //validar
    indexnew: (req, res) =>{
        res.send("Qual vai ser seu primeiro pedido?");
    }, //OK!
    new:(req, res) => {
        let nomeCliente = req.params.nome;
        let pizzas = req.params.pizzas; //verificar
        res.send(pedidoModel.fazerPrimeiroPedido(nomeCliente, ...pizzas))
    }, //OK!
    indexadd: (req, res) =>{
        res.send("Adicione um novo pedido à sua conta!");
    }, //OK!
    add:(req, res) => {
        let nomeCliente = req.params.nome;
        let pizzas = req.params.pizzas; //verificar
        res.send(pedidoModel.adicionarPedido(nomeCliente, ...pizzas))
    }, //validar
    indexselect: (req, res) =>{
        res.send("Qual cliente você está procurando?");
    }, //OK
    select:(req, res) => {
        let cliente = req.params.nome;
        res.send(pedidoModel.buscarPedidosPorCliente(cliente))
    } //validar
}

module.exports = pedidoController