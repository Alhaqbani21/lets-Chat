/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#004fff',

          secondary: '#fcad00',

          accent: '#008600',

          neutral: '#060402',

          'base-100': '#78716c',

          info: '#d1d5db',

          success: '#70d75a',

          warning: '#e38e00',

          error: '#f53b4e',
        },
      },
    ],
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'whatsapp-bg': "url('/src/assets/whatappBg.png')",
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
