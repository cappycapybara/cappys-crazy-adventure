import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // or 'media' if you want media query based dark mode
  purge: ["./src/**/*.tsx"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: (theme: any) => ({
        dark: {
          css: {
            color: theme("colors.gray.300"),
            '[class~="lead"]': {
              color: theme("colors.gray.400"),
            },
            blockquote: {
              color: theme("colors.gray.300"),
              borderLeftColor: theme("colors.gray.600"),
            },
            hr: {
              borderColor: theme("colors.gray.700"),
            },
            "ol > li::before": {
              color: theme("colors.gray.500"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.gray.500"),
            },
            strong: {
              color: theme("colors.white"),
            },
            thead: {
              color: theme("colors.white"),
              borderBottomColor: theme("colors.gray.400"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.600"),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"], // this line is important to extend dark mode
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};

export default config;
