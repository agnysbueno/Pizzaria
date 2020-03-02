const express = require('express');
const router = express.Router();
const pedidoController = require("../controller/PedidoController");

router.get('/', pedidoController.list);

router.get('/new', pedidoController.indexnew);
router.get('/new/:nome&:pizzas', pedidoController.new);

router.get('/add', pedidoController.indexadd);
router.get('/add/:nome&:pizzas', pedidoController.add);

router.get('/buscar', pedidoController.indexselect);
router.get('/buscar/:nome', pedidoController.select);

module.exports = router;