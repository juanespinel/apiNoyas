const express = require ('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/', userController.prueba);
router.post('/create', userController.create);

module.exports = router;