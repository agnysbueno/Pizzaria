let cardapio =[
    {
        nome: "Mussarela",
        categoria: "Salgada",
        preco: 10
    },
    {
        nome: "Calabresa",
        categoria: "Salgada",
        preco: 12
    },
    {
        nome: "Chocolate",
        categoria: "Doce",
        preco: 15
    },
    {
        nome: "Brócolis",
        categoria: "Vegetariana",
        preco: 18
    }
];

const adicionarPizzaNova = (nomeDaPizzaNova, categoriaDaPizzaNova, precoDaPizzaNova) => {    
    pizzaNova = {
        nome: nomeDaPizzaNova,
        categoria: categoriaDaPizzaNova,
        preco: precoDaPizzaNova
    }
    cardapio.push(pizzaNova)
    let feedback = `Pizza ${nomeDaPizzaNova} foi adicionada ao cardápio!`
    return feedback
};

const listarPizzas = (array) => {
    let conteudo = ""
    for(let pizza of array){
        conteudo+=`
        Sabor: ${pizza.nome} <br>
        Categoria: ${pizza.categoria} <br>
        Preço: ${pizza.preco} <br>
        -------------------- <br>`         
    }
    return conteudo;
};

const buscarPizzaPorNome = (nomePizza) => {
    let pizzasEncontradas = cardapio.filter(pizza => pizza.nome.toLowerCase() === nomePizza.toLowerCase())
    let resultadoBusca
    if (pizzasEncontradas.length > 0) {
        resultadoBusca = listarPizzas(pizzasEncontradas);
    } else {
        resultadoBusca = "Ops, ainda não temos essa pizza no cardápio. O que acha de escolher outra?";
    }
    return resultadoBusca   
};

const buscarPizzasPorCategoria = (categoria) => {
    let pizzasEncontradas = cardapio.filter(pizza => pizza.categoria.toLowerCase() === categoria.toLowerCase())
    let resultadoBusca
    if (pizzasEncontradas.length > 0) {
        resultadoBusca = listarPizzas(pizzasEncontradas)
    } else {
        resultadoBusca = "Ops, ainda não temos pizzas dessa categoria. Mas você pode procurar por outra!"
    }
    return resultadoBusca
};

module.exports = {cardapio, adicionarPizzaNova, listarPizzas, buscarPizzaPorNome, buscarPizzasPorCategoria}