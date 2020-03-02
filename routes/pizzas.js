const express = require('express');
const router = express.Router();
const pizzaController = require("../controller/PizzaController");

router.get('/', pizzaController.list);

router.get('/add', pizzaController.indexadd);
router.get('/add/:nome&:categoria&:preco', pizzaController.add);

router.get('/buscar', pizzaController.indexshow);
router.get('/buscar/:nome', pizzaController.show);

router.get('/buscar/categoria', pizzaController.indexselect);
router.get('/buscar/categoria/:nome', pizzaController.select);

module.exports = router;