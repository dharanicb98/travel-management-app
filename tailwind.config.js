/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'bree-serif': ['"Bree Serif"', 'serif'],
        'caveat': ['"Caveat"', 'cursive'],
        'lobster': ['"Lobster"', 'cursive'],
        'monoton': ['"Monoton"', 'cursive'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'playfair-display-sc': ['"Playfair Display SC"', 'serif'],
        'playfair-display': ['"Playfair Display"', 'serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
        'source-sans-pro': ['"Source Sans Pro"', 'sans-serif'],
        'work-sans': ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
