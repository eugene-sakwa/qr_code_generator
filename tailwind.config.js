module.exports = {
  content: [
    "./index.html", // Path to the main HTML file
    "./main.js", // Path to your JavaScript file
    "./src/**/*.css", // Corrected glob pattern to include all CSS files in src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
