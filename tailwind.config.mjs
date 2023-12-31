/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      title: "Londrina Solid, sans-serif",
      sans: "PT Sans, Schibsted Grotesk, sans-serif" 
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
