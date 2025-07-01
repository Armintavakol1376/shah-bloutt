/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
//airnik: wekf#@34ShahB32R
//iserver: ShahB@12
//color pallete: https://0to255.com/96001e
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      modamEL: ["var(--font-modamEL)"],
      modamL: ["var(--font-modamL)"],
      modamR: ["var(--font-modamR)"],
      modamM: ["var(--font-modamM)"],
      modamBo: ["var(--font-modamBo)"],
      modamBl: ["var(--font-modamBl)"],
      modamEng: ["var(--font-modamEng)"],
      thin: ["var(--font-thin)"],
      black: ["var(--font-black)"],
      peydablack: ["var(--font-peydablack)"],
    },

    colors: {
      lightBg: "#f1f1f1",
      lightBgTwo: "#FFFF",
      lightTxtOne: "#03071e",
      lightTxtTwo: "#646464",
      lightTxtThree: "#03071e",
      darkBg: "#03071e",
      darkBgTwo: "rgba(200,200,200,0.2)",
      darkTxtOne: "#F3F3F3",
      darkTxtTwo: "#F1F1F1",
      darkTxtThree: "#F2F2F2",
      shiraz: "#ad1037",
    },
  },

  darkMode: "class",
  plugins: [nextui()],
};
