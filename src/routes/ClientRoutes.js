const { Router } = require('express');
const ClientController = require('../controllers/ClientController');

const router = Router();

router.post('/', ClientController.criarCliente);
router.get('/', ClientController.listarClientes);

module.exports = router;