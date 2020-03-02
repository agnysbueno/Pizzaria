const express = require('express')
const app = express()
const rotasPizzas = require('./routes/pizzas')
const rotasPedidos = require('./routes/pedidos')


app.listen(3000, () => console.log("A pizzaria tá online!!!!"));

app.get("/", (req, res) => res.send("Seja bem-vindo! Vem ver nosso cardápio :P"));

app.use("/pizzas", rotasPizzas);
app.use("/pedidos", rotasPedidos);