export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#03142A',
        'accent-green': '#00FF55',
        'accent-purple': '#8B00FF',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'mono': ['Roboto Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}