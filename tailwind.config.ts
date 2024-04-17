import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#161616",
          foreground: "#f5f4f0",
        }
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
