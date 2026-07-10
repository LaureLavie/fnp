/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // Palette extraite de la charte graphique
        'fnp-indigo': '#1F1B43',
        'fnp-cyan': '#4EA3FF',
        'fnp-terracotta': '#BF5F2D',
        'fnp-orange': '#FAAB2C',
        'fnp-nuage': '#FAFCFF',
      },
      fontFamily: {
        // Montserrat pour les titres[cite: 2]
        'sans': ['Montserrat', 'sans-serif'], 
        // Kodchasan pour le corps de texte[cite: 2]
        'kodchasan': ['Kodchasan', 'sans-serif'],
      },
    },
  },
  plugins: [],
}