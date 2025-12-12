import express from 'express';
const router = express.Router();

// Home Page
router.get('/', (req, res) => {
    res.render('pages/home', {
        title: 'Home Page',
        message: 'Welcome to Express + EJS!'
    });
});

// About Page
router.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'About Us',
        teamMembers: ['Alice', 'Bob', 'Charlie']
    });
});

export default router;