const express = require('express');
const { addPhoto, getPhotos } = require('../controllers/galleryController');
const router = express.Router();


router.get('/', getPhotos);
router.post('/add', addPhoto);

module.exports = router;
