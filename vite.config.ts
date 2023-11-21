import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Obtain your IP address
const ipAddress = '0.0.0.0';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Specify the host (IP address) and port
    host: ipAddress,
    port: 5173, // You can change this port if needed
  },
});
