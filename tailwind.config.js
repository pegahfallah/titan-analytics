module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    spacing: {
      xs: "16px",
      sm: "2%",
      md: "5%",
      lg: "10%",
      xl: "15%",
    },

    fontFamily: {
      sans: ["IBM\\ Plex\\ Sans", "ui-sans-serif", "system-ui"],
      mono: ["ui-monospace", "SFMono-Regular"],
      body: ["IBM\\ Plex\\ Sans"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "42px",
      "5xl": "3.3rem",
      "6xl": "3.5rem",
    },
    extend: {
      colors: {
        blue: "rgb(59, 6, 166)",
      },
    },
  },
  variants: {},
  plugins: [],
};
