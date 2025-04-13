import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,  // Fallback to port 3000 if $PORT is not available
    host: '0.0.0.0',  // Ensure the server is accessible externally
  },
});
