import express from 'express';
import config from '../config/app.js';
import logger from './logger.js';

const setupMiddleware = (app) => {
    // Set EJS as view engine
    app.set('view engine', 'ejs');
    app.set('views', config.VIEWS_DIR);
    
    // Serve static files
    app.use(express.static(config.PUBLIC_DIR));
    
    // Parse request bodies
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    
    // Custom logger
    app.use(logger);
    
    console.log('✅ Middleware configured');
};

export default setupMiddleware;