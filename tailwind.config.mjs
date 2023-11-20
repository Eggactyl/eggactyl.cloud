// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("daisyui")],
  daisyui: {
    prefix: "daisy-",
  },
  prefix: "tw-",
};
