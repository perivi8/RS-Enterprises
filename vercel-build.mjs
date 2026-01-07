import { execSync } from 'child_process';
import { existsSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set environment variable for Vite base URL
process.env.VITE_BASE_URL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '/';

// Create .env file if it doesn't exist
const envPath = join(__dirname, '.env');
if (!existsSync(envPath)) {
  writeFileSync(envPath, `VITE_BASE_URL=${process.env.VITE_BASE_URL}\n`);
}

// Install dependencies and build the project
try {
  console.log('Installing dependencies...');
  execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });
  
  console.log('Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
