module.exports = {
   purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
   darkMode: false, // or 'media' or 'class'
   theme: {
      fontFamily: {
         sans: ["ui-sans-serif", "system-ui"],
         kaushan: ["Kaushan Script"],
         Poppins: ["Poppins", "sans-serif"],
      },

      color: {
         crayola: {
            light: "#9094ca",
            DEFAULT: "#6166B3",
            dark: "#44477d",
         },
      },

      extend: {},
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
