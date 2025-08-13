/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(20px)" },
        },
        float: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(20px)" },
        },
        slideleft: {
          "0%": {
            transform: "translateX(100px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        slidetop: {
          "0%": {
            transform: "translateY(100px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideright: {
          "0%": {
            transform: "translateX(-100px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        slidebottom: {
          "0%": {
            transform: "translateY(100px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marque: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        stepMarquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },

      animation: {
        float: "float 2s ease-in infinite",
        wiggle: "wiggle 3s ease-in infinite",
        slideleft: "slideleft 1s ease-out forwards",
        slideright: "slideright 1s ease-out forwards",
        slidetop: "slidetop 1s ease-out forwards",
        slidebottom: "slidebottom 1s ease-out forwards",
        fadeInUp: "fadeInUp 0.5s ease-out forwards",
        marquee: "marquee 10s linear infinite",
        marque: "marquee 20s linear infinite",
        stepMarquee: "stepMarquee 10s steps(12) infinite",
      },
    },
  },
  plugins: [],
};
