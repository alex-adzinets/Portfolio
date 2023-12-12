/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        RockSalt: ['RockSalt'],
        Eklektyk: ['Eklektyk Stencil'],
        Inter:['Inter'],
        LandRover:['Land Rover OT4'],
        GreatVibes:['Great-vibes'],
      },
      backgroundImage:{
        me: "url('/images/me.png')",
      } 
    },
  },
  plugins: [],
}

