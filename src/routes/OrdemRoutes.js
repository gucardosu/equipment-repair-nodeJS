const { Router } = require('express');
const OrdemController = require('../controllers/OrdemController');

const router = Router();

router.post('/', OrdemController.criarOrdem);
router.get('/', OrdemController.listarOrdens);

module.exports = router;