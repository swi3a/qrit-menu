/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#777",
          "200": "#0f172a",
          "300": "#020617",
          "400": "rgba(0, 0, 0, 0.5)",
          "500": "rgba(0, 0, 0, 0.1)",
          "600": "rgba(0, 0, 0, 0.25)",
          "700": "rgba(0, 0, 0, 0.33)",
        },
        darkslategray: "#40484e",
        black: "#000",
        darkgray: "#959fa8",
      },
      spacing: {},
      fontFamily: {
        "droid-sans": "'Droid Sans'",
        inter: "Inter",
        poppins: "Poppins",
        nunito: "Nunito",
        manrope: "Manrope",
      },
      borderRadius: {
        "base-6": "16.6px",
        "2xs-5": "10.5px",
        lg: "18px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      xs: "12px",
      mini: "15px",
      "5xs": "8px",
      sm: "14px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  plugins: [],
};
