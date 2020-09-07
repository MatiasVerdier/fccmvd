module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
