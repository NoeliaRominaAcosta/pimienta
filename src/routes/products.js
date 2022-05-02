const express = require('express');
const router = express.Router();
const {detail} = require('../controllers/productsController')

//  llega como  /products

router.get('/detail/:id', detail);

module.exports = router;
