const pizzaModel = require("../model/Pizza");
const pizzaController = {
    list:(req, res) => {
        res.send(pizzaModel.listarPizzas(cardapio))
    }, //validar
    indexadd: (req, res) =>{
        res.send("Adicione uma nova pizza ao cardápio!");
    }, //validar
    add:(req, res) => {
        let nomePizza = req.params.nome;
        let categoria = req.params.categoria;
        let preco = req.params.preco;
        res.send(pizzaModel.adicionarPizzaNova(nomePizza, categoria, preco))
    }, //validar
    indexshow: (req, res) =>{
        res.send("Qual pizza você está procurando?");
    }, //validar
    show:(req, res) => {
        let nomePizza = req.params.nome;
        res.send(pizzaModel.buscarPizzaPorNome(nomePizza))
    }, //validar
    indexselect: (req, res) =>{
        res.send("Qual categoria você está procurando?");
    }, //validar
    select:(req, res) => {
        let categoria = req.params.nome;
        res.send(pizzaModel.buscarPizzasPorCategoria(categoria))
    } //validar
}

module.exports = pizzaController