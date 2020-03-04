const express = require('express');
const router = express.Router();
const pedidoController = require("../controller/PedidoController");

router.get('/', pedidoController.list);

router.get('/add', pedidoController.indexadd);
router.get('/add/:nome&:pizzas', pedidoController.add);

module.exports = router;