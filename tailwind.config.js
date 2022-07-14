const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    // overwrite tailwind classes

    extend: {
      // add on to the tailwind classes]
      colors: {
        "fake-red": "#ff0000",
      },

      spacing: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
      fontFamily: {
        fun: ["Varela Round", "sans-serif"],
      },
    },
  },

  plugins: [],
};
