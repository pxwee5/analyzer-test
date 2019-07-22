var tailwindcss = require('tailwindcss');
var autoprefixer = require('autoprefixer');

// prettier-ignore
module.exports = () => ({
  plugins: [
    tailwindcss('./tailwind.config.js'),
    autoprefixer({
      grid: false
    })
  ]
})
