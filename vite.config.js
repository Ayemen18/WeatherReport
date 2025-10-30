import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: prcoess.env.VITE_BASE_PATH || '/WeatherReport',  
});
