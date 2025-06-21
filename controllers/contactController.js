const Contact = require('../models/Contact');

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: 'Contact form submitted successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Error submitting contact form' });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ submittedAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching contact messages' });
  }
};
