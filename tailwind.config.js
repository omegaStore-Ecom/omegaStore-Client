module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 5s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
