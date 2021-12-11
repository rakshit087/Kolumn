import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import "../assets/global.css";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound";

declare let window: any;

function MyApp({ Component }: AppProps) {
  const [meta, setMeta] = useState<Boolean | undefined>(undefined);
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
      setMeta(true);
    } else {
      setMeta(false);
    }
  });
  return meta == undefined ? (
    <Loading />
  ) : meta == true ? (
    <Component />
  ) : (
    <NotFound />
  );
}

export default MyApp;
