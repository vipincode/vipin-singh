module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,// or 'media' or 'class'
  theme: {
    extend: { 
      backgroundImage: {
        'hero-banner': "url('/img/banner.jpg')",
        'sm-banner': "url('/img/sm-banner.jpg')",
        'sec-banner': "url('/img/section-bg.jpg')",
       },
       lineHeight: {
        '3': '1.875rem',
       }
    },
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      gray: 'var(--color-gray)',
      black: 'var(--color-black)',
    },
    fontFamily: {
      'body': ['"Nunito Sans"' , 'sans-serif'],
      'display': ['"Playfair Display"' , 'serif'],
    },
    letterSpacing: {
      widest: '8px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
