import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        prussianblue: "#11263aff",
        prussianblue2: "#162e44ff",
        fullwhite: "#ffffffff",
        seasalt: "#f7f7f7ff",
        lightseagreen: "#01b3a7ff",
      },
    },
  },
  plugins: [],
} satisfies Config;
