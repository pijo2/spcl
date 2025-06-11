import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Zmień poniżej na swoją nazwę repozytorium
const repoName = 'nazwarepo'

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()]
})
