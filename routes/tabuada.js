const express = require('express')
const router = express.Router()
const tabuadaController = require('../controllers/tabuada')

router.get('/tabuadas', tabuadaController.list)
router.get('/tabuadas/:num', tabuadaController.tabuada)

module.exports = router