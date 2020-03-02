const pizzaModel = require("../model/Pizza");
const cardapio = pizzaModel.cardapio;

let registros = [
    {
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
    },
];

const fazerPrimeiroPedido = (nomeClienteNovo,...pizzasPedidas) => {
    let novoCliente = {
        cliente: nomeClienteNovo,
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
    registros.push(novoCliente)
    let feedback = `Seu pedido foi registrado, ${nomeClienteNovo}. Volte sempre!`
    return feedback
};
//fazerPrimeiroPedido("Marissa", "Mussarela", "Calabresa"); //OK!

const adicionarPedido = (nomeCliente,...pizzasPedidas) => {
    novoPedido = {
        pizzas: pizzasPedidas,
        total: 0,
        data: new Date()
    };
    const calcularTotal = (...pizzasPedidas) => {
        for(let item of pizzasPedidas){
            for(let pizza of cardapio){
                if(pizza.nome == item){
                    novoPedido.total+= pizza.preco
                }
            }
        }
    };
    calcularTotal(...pizzasPedidas)
    for (let cliente of registros){
        if(cliente.cliente == nomeCliente){
            cliente.pedidos.push(novoPedido)
        }//ARRUMAR!!!!!!!!!!!!!
    }
    let feedback = `Seu pedido foi registrado, ${cliente}. Obrigado pela preferência!`
    return feedback
};
//adicionarPedido(registros[0], "Chocolate", "Brócolis"); //OK!

const listarPedidos = (array) => {
    let conteudo = ""
    for(let cliente of array){
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
};
//console.log(listarPedidos(registros)); //OK!

const buscarPedidosPorCliente = (nomeCliente) => {
    let clientesFiltrados = registros.filter(cliente => cliente.nome.toLowerCase() == nomeCliente.toLowerCase());
    let resultadoBusca
    if(clientesFiltrados.length > 0){
        resultadoBusca = listarPedidos(clientesFiltrados);
    } else {
        resultadoBusca = "Não encontramos clientes com esse nome :("
    }
    return resultadoBusca
};
//console.log(buscarPedidosPorCliente("Seth")) //VALIDAR


module.exports = {fazerPrimeiroPedido, adicionarPedido, listarPedidos, buscarPedidosPorCliente}