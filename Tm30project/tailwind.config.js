/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#eee',
        'color1':'#D3D5DB',
        'sidebar':'#1B59F8',
        'color3':'#00000066',
        'color4':'#1C1C1C'
      },
    },
    screens: {}
  },
  plugins: [],
}

