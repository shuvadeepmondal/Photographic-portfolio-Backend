const express = require('express');
const { submitContactForm, getContacts } = require('../controllers/contactController');
const router = express.Router();

router.post('/', submitContactForm); 
router.get('/', getContacts); 

module.exports = router;
