const daisyui = require("daisyui");
const typography = require("@tailwindcss/typography");

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
    container: {
      center: true,
    },
  },

	daisyui: {
		themes: 'cupcake',
	},

  plugins: [typography, daisyui]
};

module.exports = config;
