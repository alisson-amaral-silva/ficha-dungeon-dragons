import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      black: '#000',
      green: {
        100:'#20BF42',
        200:'#28CF26',
        300:'#56DF2C',
        500:'#87EF32',
        600:'#BAFF39',
        700:'#E4FF47',
        800:'#FFFF55',
        900:'#FFE463',
      },
      yellow: {
        100: '#6DBF42',
        200: '#95CF4A',
        300: '#BFDF52',
        500: '#ECEF5A',
        600: '#FFE463',
        700: '#FFCC6E',
        800: '#FFB879',
        900: '#FFA784',
      },
      white: {
        100: '#BFBFBF',
        200:'#CFCFCF',
        300: '#fff',
        500: '#DFDFDF',
        600: '#EFEFEF',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
