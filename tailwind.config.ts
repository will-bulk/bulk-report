import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#E8A000',
          green: '#4CAF50',
          dark: '#1a1a2e',
          darker: '#0f0f1a',
        },
      },
    },
  },
  plugins: [],
}
export default config
