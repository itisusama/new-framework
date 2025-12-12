import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Go up one level from config folder to project root
const ROOT_DIR = path.join(__dirname, '..');

const config = {
    PORT: process.env.PORT || 3000,
    ROOT_DIR: ROOT_DIR,
    VIEWS_DIR: path.join(ROOT_DIR, 'src'),
    PUBLIC_DIR: path.join(ROOT_DIR, 'public')
};

export default config;