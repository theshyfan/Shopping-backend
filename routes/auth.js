const router = require('express').Router();
const authController = require('../controllers/authController');
const productController = require('../controllers/authController');

router.post('/register', authController.createUser)
router.post('/login', authController.loginUser)

module.exports = router;