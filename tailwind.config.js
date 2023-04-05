/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['"Rubik"'],
      },
      colors: {
        'primary-green':'#BAD532',
        'secondary-green':'#9FB91D',
        'primary-blue':'#2F4858',
        'secondary-blue':'#485A73'
      }
    },
  },
  plugins: [],
}

