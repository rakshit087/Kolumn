import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import '../assets/global.css';
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
