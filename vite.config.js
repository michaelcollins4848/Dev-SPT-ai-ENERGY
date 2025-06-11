import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({

  theme: {
    extend: {
      colors: {
        ocean: {
          DEFAULT: '#0077B6',
          light: '#0096C7',
          dark: '#023E8A',
        },
        sun: {
          DEFAULT: '#FFD166',
          light: '#FFE49A',
        },
        lime: {
          DEFAULT: '#9AE66E',
          dark: '#6FCF97',
        },
        sand: {
          DEFAULT: '#E6D3B3',
        },
        cloud: {
          DEFAULT: '#CA7842',
        },
        charcoal: {
          DEFAULT: '#333333',
          light: '#4B5563',
        },
      },
    },
  },
  plugins: [react(), tailwindcss()],
})
