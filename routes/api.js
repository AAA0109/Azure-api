const express = require('express');
const router = express.Router();

const { getRetailPrices } = require('../controllers/azure');

router.get('/getRetailPrices', getRetailPrices);

module.exports = router;
