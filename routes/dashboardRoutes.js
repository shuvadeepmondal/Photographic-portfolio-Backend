const express = require('express');
const {
  getPhotoStats,
  getUserStats,
  getAllUsers,
  getAllPhotos,
  addPhoto,
  deletePhoto
} = require('../controllers/dashboardController');

const router = express.Router();


router.get('/stats', getPhotoStats);
router.get('/photos', getAllPhotos);
router.post('/photos', addPhoto);
router.delete('/photos/:id', deletePhoto);



router.get('/users', getAllUsers);
router.get('/users/count', getUserStats);

module.exports = router;
