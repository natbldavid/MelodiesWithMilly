/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        romantic: ['"Dancing Script"', 'cursive'],
        elegant:  ['"Playfair Display"', 'serif'],
        fredoka:   ['"Fredoka"', 'sans-serif'],
      },
      colors: {
        princessBg:    '#F6EDEE',
        princessAccent:'#97B4EA',
      },
      // ← remove backgroundImage & backgroundSize entirely
    },
  },
  plugins: [],
}