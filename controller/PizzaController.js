const pizzaModel = require("../model/Pizza");
const pizzaController = {
    list:(req, res) => {
        res.send(pizzaModel.listarPizzas(pizzaModel.cardapio))
    },
    indexadd: (req, res) =>{
        res.send("Adicione uma nova pizza ao cardápio!");
    },
    add:(req, res) => {
        let nomePizza = req.params.nome;
        let categoria = req.params.categoria;
        let preco = req.params.preco;
        res.send(pizzaModel.adicionarPizzaNova(nomePizza, categoria, preco))
    },
    indexshow: (req, res) =>{
        res.send("Qual pizza você está procurando?");
    },
    show:(req, res) => {
        let nomePizza = req.params.nome;
        res.send(pizzaModel.buscarPizzaPorNome(nomePizza))
    },
    indexselect: (req, res) =>{
        res.send("Qual categoria você está procurando?");
    },
    select:(req, res) => {
        let categoria = req.params.nome;
        res.send(pizzaModel.buscarPizzasPorCategoria(categoria))
    }
}

module.exports = pizzaController