import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "white": "#fff",
      "green":{
        100: "#c5ebd6",
        200: "#83e1ad",
        300: "#3ddc84",
        400: "#2fa866",
        500: "#1a5c37",
        600: "#063d1e"
      },
      "stone": "rgb(168 162 158)",
      "gray": {
        "100": "rgb(229 231 235)",
        "200": "#1e1e24"
      }
    },
    extend: {
      spacing: {
        "25": "100px",
        "30": "120px",
        "65": "260px",
        "5-pct": "5%",
        "90-pct": "90%"
      },
      screens: {
        "mobile-lg": "425px"
      },
      padding: {
        "pct": "56.5%"
      },
      listStyleImage: {
        check: "url(/checkmark.svg)"
      },
    },
  },
  plugins: [],
};
export default config;
