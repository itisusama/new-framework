import express from 'express';
const router = express.Router();

// Contact Page
router.get('/', (req, res) => {
    res.render('pages/contact', {
        title: 'Contact Us'
    });
});

// Handle Contact Form
router.post('/', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Form submitted:', { name, email, message });
    
    res.render('pages/contact', {
        title: 'Contact Us',
        success: 'Message sent successfully!'
    });
});

export default router;