/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Safelist for text sizes
    'text-4xl', 'md:text-6xl', 'lg:text-8xl',
    'text-3xl', 'md:text-5xl', 'lg:text-6xl',
    'text-gray-300', 'text-white', 'font-bold',

    // Safelist for paragraphs and spacing
    'text-lg', 'md:text-xl', 'lg:text-3xl',
    'max-w-5xl', 'mx-auto',

    // Safelist for buttons and colors
    'bg-[#0aeb08]', 'text-white', 'rounded-lg',
    'px-4', 'md:px-6', 'py-2',

    // Safelist for flex layout
    'flex', 'flex-col', 'justify-center', 'items-center',

    // Additional safelist for positioning
    'absolute', 'top-20', 'relative',

    // Safelist for background and overlay
    'w-full', 'h-full', 'inset-0', 'bg-black', 'opacity-40',

    // Width and height control
    'w-full', 'h-screen', 'max-h-[80vh]'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.175, 0.885, 0.32, 1.475)",
      },
      colors: {
        primary: {
          1: "#EFEFEF",   // Gris claro, usado como fondo principal
          2: "#5E697A",   // Gris azulado, color de texto principal
          3: "#666666",   // Gris oscuro, utilizado para texto secundario
          4: "#03193B",   // Azul oscuro, posiblemente utilizado como color de fondo secundario
          5: "#828D9E",   // Gris azulado, posiblemente utilizado como color de texto secundario
          6: "#E5E4E4",   // Gris claro, posiblemente utilizado como fondo alternativo
        },
        secondary: {
          1: "#0E1445",   // Azul oscuro, posiblemente utilizado como fondo secundario
          2: "#4285F4",   // Azul de Google, posiblemente utilizado como acento
          3: "#93c8ed",   // Azul claro, posiblemente utilizado como fondo de navegación
        },
      },
      keyframes: {
        loadIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        loadIn: "loadIn 7s linear",
      },
      borderRadius: {
        '50': '50px',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
