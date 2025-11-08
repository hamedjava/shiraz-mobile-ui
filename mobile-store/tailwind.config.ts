import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-yellow': '#FFC700',
        'background-light': '#F9F9F9',
        'text-dark': '#1E1E1E',
        'accent-gray': '#333333',
      }
    },
  },
  plugins: [],
}
export default config
