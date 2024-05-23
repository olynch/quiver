import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'


const path = fileURLToPath(import.meta.url)
const root = resolve(dirname(path) + '/src')

export default defineConfig({
  root,
  plugins: []
})
