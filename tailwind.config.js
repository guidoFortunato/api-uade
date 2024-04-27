/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-image":
          'url("https://www.tuentrada.com/experiencia/ayuda-consulta/background-main.png")',
      },
      
      colors: {
        "violet-dark": "rgb(92, 18, 161)",
        "violet-light": "#c77dff",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin")],
};
