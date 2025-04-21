/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       lightHower:"#fcf4ff",
       darkHower:"#2a004a",
       darkTheme:"#11001F"
      },
      fontFamily:{
        Outfit:["Outfit","sans-serif"],
        Ovo:["Ovo","serif"]
      },
      boxShadow:{
        'black':'0px 0px 5px #000',
        'white':'0px 0px 4px #000',
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fit, minmax(200px,1fr))'
      }
    },
  },
  darkMode:'class',
  plugins: [],
};
