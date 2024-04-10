/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue": "#3375FF",
        "darkBlue": "#0040a8",
        "gray": "#676D83" 
      },

      backgroundImage: {
        advantagesImage: "url('assets/banner.png')"
      }

    },
  },
  plugins: [],
}

