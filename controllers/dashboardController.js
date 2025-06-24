const Photo = require('../models/Photo');
const User = require('../models/User');


exports.getPhotoStats = async (req, res) => {
  try {
    const count = await Photo.countDocuments();
    res.status(200).json({ totalPhotos: count });
  } catch (err) {
    res.status(500).json({ error: 'Failed to count photos' });
  }
};


exports.getUserStats = async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.status(200).json({ totalUsers: count });
  } catch (err) {
    res.status(500).json({ error: 'Failed to count users' });
  }
};


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

exports.getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.find(); // fetch all from MongoDB
    res.status(200).json(photos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch photos' });
  }
};


exports.addPhoto = async (req, res) => {
  try {
    const { title, url, category } = req.body;
    const photo = new Photo({ title, url, category });
    await photo.save();
    res.status(201).json({ message: 'Photo added', photo });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add photo' });
  }
};

exports.deletePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    await Photo.findByIdAndDelete(id);
    res.status(200).json({ message: 'Photo deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete photo' });
  }
};

