const express = require('express');
const router = express.Router();
const {index} = require('../controllers/indexController')

//  llega como  /   

router.get('/', index);

module.exports = router;
