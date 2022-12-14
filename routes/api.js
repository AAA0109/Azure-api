const express = require('express');
const router = express.Router();

const { getRetailPrices, getRetailPricesWithSku } = require('../controllers/azure');

router.post('/getRetailPrices', getRetailPrices);
router.post('/getRetailPricesWithSku', getRetailPricesWithSku);

module.exports = router;
