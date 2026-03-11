import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

function mastersManifestPlugin() {
  const mastersDir = path.resolve(__dirname, 'public/masters')
  const manifestPath = path.resolve(__dirname, 'public/masters-manifest.json')

  function writeManifest() {
    if (!fs.existsSync(mastersDir)) {
      fs.writeFileSync(manifestPath, JSON.stringify([]))
      return
    }
    const files = fs.readdirSync(mastersDir)
      .filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f))
      .map(f => ({ name: f, url: `/masters/${f}` }))
    fs.writeFileSync(manifestPath, JSON.stringify(files, null, 2))
  }

  return {
    name: 'masters-manifest',
    buildStart() { writeManifest() },
    configureServer(server: any) {
      writeManifest()
      server.watcher.on('add', (f: string) => { if (f.includes('masters')) writeManifest() })
      server.watcher.on('unlink', (f: string) => { if (f.includes('masters')) writeManifest() })
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    mastersManifestPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
