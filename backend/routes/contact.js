import express from 'express';
import Contact from '../models/Contact.js';
import { Resend } from 'resend';

const router = express.Router();

// POST - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, location, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required'
      });
    }

    // Save to database
    const contact = new Contact({
      name,
      email,
      phone,
      location,
      message
    });

    await contact.save();

    // Optional: Send email notification via Resend (FREE - 100 emails/day)
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: process.env.EMAIL_USER,
          subject: `New Portfolio Contact: ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Location:</strong> ${location || 'Not provided'}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `
        });
        console.log('Email sent successfully via Resend');
      } catch (emailError) {
        console.log('Email notification failed (saved to DB):', emailError.message);
      }
    }

    res.status(201).json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again.'
    });
  }
});

// GET - Get all contacts (for admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
