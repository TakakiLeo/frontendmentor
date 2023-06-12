/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    colors: {
      primary: {
        vermelho: "hsl(0, 100%, 67%)",
        amarelo: "hsl(39, 100%, 56%)",
        verde: "hsl(166, 100%, 37%)",
        azul: "hsl(234, 85%, 45%)",
        branco: "hsl(221, 100%, 96%)",
      },
      secundary: {
        amareloClaro: "#FFF7E4",
        vermelhoClaro: "#FFE7E4",
        verdeClaro: "#E0FFFC",
        azulClaro: "#E9E9FF",
      },
      gradient: {
        roxoClaro: "hsl(252, 100%, 67%)",
        roxoEscuro: "hsl(241, 81%, 54%)",
      },
      circle: {
        violetaAzul: "hsla(256, 72%, 46%, 1)",
        azulPersiano: "hsla(241, 72%, 46%, 0)",
      },
      corTexto: {
        roxo: "hsl(241, 100%, 89%)",
        branco: " hsl(0, 0%, 100%)",
        azulEscuro: "hsl(224, 30%, 27%)",
        pretoClaro:"#A9A9A9	"
      },
    },
    extend: {
      fontFamily: {
        hanken: ['"Hanken Grotesk"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
