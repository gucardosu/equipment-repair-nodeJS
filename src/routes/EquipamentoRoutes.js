const { Router } = require('express');
const EquipamentController = require('../controllers/ClientEquipament');

const router = Router();

router.post('/', EquipamentController.criarEquipamento);
router.get('/', EquipamentController.listEquipament);

module.exports = router;