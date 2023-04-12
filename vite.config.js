// vite.config.js
const { resolve } = require('path')

module.exports = {
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Set your source folder path
    },
  },
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
