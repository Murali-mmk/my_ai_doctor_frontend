import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import svgr from '@svgr/rollup'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ],
  build: {
    chunkSizeWarningLimit: 60000,
    
  },
  server: {
    port: 3000, // Set the port to 3000
  },
  
})
