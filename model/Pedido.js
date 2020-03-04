const pizzaModel = require("../model/Pizza");
const cardapio = pizzaModel.cardapio;

let registros = [{
        cliente:"Ryan",
        pedidos:[
            {
            pizzas:["Mussarela", "Calabresa"],
            total: 22,
            data: new Date(2020,0,12) 
            },
            {
            pizzas:["Calabresa"],
            total: 12,
            data: new Date(2020,0,31) 
            },
        ]
    },
    {
        cliente:"Seth",
        pedidos: [
            {
            pizzas:["Mussarela", "Calabresa", "Chocolate"],
            total: 37,
            data: new Date(2020,1,04)
            }
        ]
    },
    {
        cliente:"Summer",
        pedidos: [
            {
            pizzas:["Brócolis"],
            total: 18,
            data: new Date(2020,1,20)
            }
        ]
    }
];

const adicionarPedido = (nomeCliente,...pizzasPedidas) => {
    let novoPedido = {
        cliente: nomeCliente,
        pedidos: [{
            pizzas: pizzasPedidas,
            total: 0,
            data: new Date()
        }]
    };
    const calcularTotal = (...pizzasPedidas) => {
        for(let item of pizzasPedidas){
            for(let pizza of cardapio){
                if(pizza.nome == item){
                    novoCliente.pedidos[0].total+= pizza.preco
                }
            }
        }
    };
    calcularTotal(...pizzasPedidas)
    registros.push(novoPedido)
    let feedback = `Seu pedido foi registrado, ${nomeCliente}. Volte sempre!`
    return feedback
};
    
const listarPedidos = (registros) => {
    let conteudo = ""
    for(let cliente of registros){
        conteudo+=`
        Cliente: ${cliente.cliente} <br>`
        for(let pedido of cliente.pedidos){
            conteudo+=`
            Pizzas: ${pedido.pizzas} <br>
            Total: ${pedido.total} <br>
            Data: ${pedido.data.getDate()}/${pedido.data.getMonth() +1}/${pedido.data.getFullYear()} <br>
            -------------------- <br>`
        }         
    }
    return conteudo;
}

module.exports = {adicionarPedido, listarPedidos}