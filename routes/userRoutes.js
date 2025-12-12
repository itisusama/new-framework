import express from 'express';
const router = express.Router();

// All routes here are prefixed with /user
// So /user/:id becomes just /:id here

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    
    // Simulated user data
    const user = {
        id: userId,
        name: `User ${userId}`,
        email: `user${userId}@example.com`,
        role: 'Member',
        posts: [
            { id: 1, title: 'My First Post' },
            { id: 2, title: 'Learning Express' }
        ]
    };
    
    res.render('pages/user', {
        title: `Profile - ${user.name}`,
        user: user
    });
});

// Edit user profile
router.get('/:id/edit', (req, res) => {
    const userId = req.params.id;
    res.render('pages/user', {
        title: 'Edit Profile',
        user: { id: userId, name: `User ${userId}`, email: '', role: 'Member', posts: [] }
    });
});

// Update user profile
router.post('/:id/edit', (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    console.log(`Updating user ${userId}:`, { name, email });
    res.redirect(`/user/${userId}`);
});

export default router;