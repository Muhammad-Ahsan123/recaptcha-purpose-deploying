import type { Config, } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      animation: {
        slideInLeft: "slideInLeft 0.7s ease-out forwards",
        slideInRight: "slideInRight 0.7s ease-out forwards",
        innovativeSlideInLeft: "innovativeSlideInLeft 0.5s ease-out forwards",
        innovativeSlideInBottom: "innovativeSlideInBottom 0.7s ease-out forwards",
        serviceSlideFromTop: 'serviceSlideFromTop 0.4s ease-out',
        serviceSlideFromLeft: 'serviceSlideFromLeft 0.6s ease-out',
        serviceSlideFromBottom: 'serviceSlideFromBottom 1.3s ease-out',
        serviceWaveEffect: 'serviceWaveEffect 1.2s ease-in-out'
      },
      keyframes: {
        slideInLeft: {
          "0%": {
            transform: "translateX(-20vw)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        slideInRight: {
          "0%": {
            transform: "translateX(10vw)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        innovativeSlideInLeft: {
          "0%": { transform: "translateX(-70vw)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        innovativeSlideInBottom: {
          "0%": { transform: "translateY(20vh)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        serviceSlideFromTop: {
          '0%': { transform: 'translateY(-100%)', opacity: "0" },
          '100%': { transform: 'translateY(0)', opacity: "1" }
        },
        // Animation for the 'See our all service' text to come from left
        serviceSlideFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: "0" },
          '100%': { transform: 'translateX(0)', opacity: "1" }
        },
        // Animation for paragraph to come from bottom with delay
        serviceSlideFromBottom: {
          '0%': { transform: 'translateY(100%)', opacity: "0" },
          '100%': { transform: 'translateY(0)', opacity: "1" }
        },
        // Animation for wave effect on the cards
        serviceWaveEffect: {
          '0%': { transform: 'scale(0.6)', opacity: "0" },
          // '50%': { transform: 'scale(0.9)', opacity: "1" },
          '100%': { transform: 'scale(1)', opacity: "1" }
        }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
