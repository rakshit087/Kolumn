import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
//Importing Layouts
import NavBar from "../layouts/Navbar";
import FrontBox from "../layouts/FrontBox";
//Improting Web3 Services
import { Web3Service } from "../services/Web3Service";

const Home: NextPage = () => {
  const router = useRouter();
  const [connected, setConnected] = useState<Boolean>(false);

  useEffect(() => {
    Web3Service.isConnected().then((con) => {
      setConnected(con);
    });
  }, []);
  useEffect(() => {
    if (connected == true)
      router.push({
        pathname: "/app",
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
      <FrontBox />
    </div>
  );
};

export default Home;
