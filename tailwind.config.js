/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#26262a',
        main2: '#28282c',
        borders: '#b6b6b1',
        borders2: '#58585f',
     }
    },
  },
  plugins: [],
}

