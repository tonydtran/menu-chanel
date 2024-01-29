import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import viteCSSExportPlugin from 'vite-plugin-css-export'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), viteCSSExportPlugin()],
})
