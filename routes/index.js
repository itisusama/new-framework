import express from 'express';
import homeRoutes from './homeRoutes.js';
import userRoutes from './userRoutes.js';
import contactRoutes from './contactRoutes.js';

const router = express.Router();

// Mount routes
router.use('/', homeRoutes);           // /, /about
router.use('/user', userRoutes);       // /user/:id, /user/:id/edit
router.use('/contact', contactRoutes); // /contact

export default router;