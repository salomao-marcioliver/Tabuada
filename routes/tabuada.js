const express = require('express')
const router = express.Router()
const tabuadaController = require('../controllers/tabuada')

router.get('/', tabuadaController.list)
router.get('/:num', tabuadaController.tabuada)

module.exports = router