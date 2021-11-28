import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
//Importing Layouts
import NavBar from "../layouts/Navbar";
//Importing Web3 Services
import { Web3Service } from "../services/Web3Service";

const App: NextPage = () => {
  const router = useRouter();
  const [connected, setConnected] = useState<Boolean>(true);

  useEffect(() => {
    Web3Service.isConnected().then((con) => {
      setConnected(con);
    });
  }, []);
  useEffect(() => {
    if (connected == false)
      router.push({
        pathname: "/",
      });
  }, [connected]);

  return (
    <div>
      <Head>
        <title>Kolumn</title>
        <meta name="Kolumn" content="Publish your articles on Blockchain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <p>You are connected</p>
    </div>
  );
};

export default App;