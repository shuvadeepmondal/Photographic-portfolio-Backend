const Gallery = require('../models/Gallery');

exports.getPhotos = async (req, res) => {
  try {
    const photos = await Gallery.find();
    res.json(photos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching photos' });
  }
};

exports.addPhoto = async (req, res) => {
  try {
    const { title, imageUrl, category } = req.body;
    const newPhoto = new Gallery({ title, imageUrl, category });
    await newPhoto.save();
    res.status(201).json({ message: 'Photo added', photo: newPhoto });
  } catch (error) {
    res.status(500).json({ message: 'Error adding photo' });
  }
};
