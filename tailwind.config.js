/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      backgroundPosition: {
        top: "top",
        bottom: "bottom",
        left: "left",
        right: "right",
        center: "center",
      },
      animation: {
        circle: "circle 2s infinite linear",

        float: "float 2s infinite",
        moveInLeft: "moveInLeft 2s fowards",
      },
      fontSize: {
        "2xs": "0.8rem",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        segoe: ["Segoe", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      boxShadow: {
        "3xl": "4.0px 8.0px 8.0px rgba(0,0,0,0.38)",
        purple: "5px 5px 0px 0px rgba(109,40,217)",
        gray: "4px -6px 5px 2px #edf2f7,0px 3px 8px 0px #edf2f7",
      },
      gradients: {
        portfolio: [
          "108.46deg",
          "rgba(255,255,255,.264) 0%",
          "rgba(255,255,255,.066) 100%",
        ],
      },
    },
  },
  variants: {
    extend: {
      backdropFilter: ["responsive"],
    },
  },
  plugins: [],
};
