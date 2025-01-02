// server/controllers/contactController.js
import Contact from '../models/Contact.js';

export const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};