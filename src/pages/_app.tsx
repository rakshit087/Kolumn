import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../assets/global.css";
import "tailwindcss/tailwind.css";
import { Web3Service } from "../services/Web3Service";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    try {
      Web3Service.init();
    } catch (err) {
      console.log(err);
    }
  });
  return <Component {...pageProps} />;
}

export default MyApp;
