import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import "../assets/global.css";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound";
import NotPolygon from "../components/NotPolygon";

declare let window: any;

function MyApp({ Component }: AppProps) {
  const [meta, setMeta] = useState<Boolean | undefined>(undefined);
  const [poly, setPoly] = useState<Boolean | undefined>(undefined);
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum
        .request({ method: "eth_chainId" })
        .then((chainID: number) => {
          if (chainID == 80001) setPoly(true);
          else setPoly(false);
        });
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
  }, []);
  if (meta == undefined) return <Loading />;
  else if (meta) {
    if (poly == undefined) return <Loading />;
    if (poly) return <Component />;
    else return <NotPolygon />;
  } else return <NotFound />;
}

export default MyApp;
