module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Tailwind'in hangi dosyalarda kullanılacağını belirtin
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#f6f6f6',
      }
    },
  },
  plugins: [],
}
