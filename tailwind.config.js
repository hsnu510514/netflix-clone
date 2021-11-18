module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ["group-hover"],
      textColor: ["odd", "even", "hover"],
      scale: ["group-hover", "hover"],
      width: ["group-hover", "hover"],
      height: ["group-hover", "hover"],
      zIndex: ["hover"],
      transitionDelay: ["group-hover", "hover"],
      transitionProperty: ["group-hover", "hover"],
      visibility: ["group-hover", "hover"],
      rotate: ["group-hover"],
      borderRadius: ["group-hover", "hover"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
