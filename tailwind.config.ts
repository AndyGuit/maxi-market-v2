import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '1920px',
      },
      container: {
        center: true,
        screens: {
          sm: '343px',
          md: '688px',
          lg: '988px',
          xl: '1280px',
          '2xl': '1520px',
        },
      },
      colors: {
        white: '#FEFEFE',
        'grey-bg-1': '#F6F6F6',
        'grey-bg-2': '#FBFBFB',
        'grey-stroke': '#D6D6D6',
        'grey-inactive': '#B3B3B3',
        primary: '#FFB52E',
        secondary: '#0058F6',
        teritary: '#282828',
      },
    },
  },
  plugins: [],
};
export default config;
