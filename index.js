import express from 'express';
import config from './config/app.js';
import setupMiddleware from './middleware/index.js';
import routes from './routes/index.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

const app = express();

// Setup middleware
setupMiddleware(app);

// Setup routes
app.use('/', routes);

// Error handling (must be last)
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(config.PORT, () => {
    console.log(`🚀 Server running at http://localhost:${config.PORT}`);
});