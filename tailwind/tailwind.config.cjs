const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: [
          'Hahmlet',
          'KimjungchulMyungjo',
          'YujiBoku',
          'NotoSerifSC',
          'Miller Display',
          ...defaultTheme.fontFamily.serif,
        ],
      },
    },
  },
  plugins: [],
};
