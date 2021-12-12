import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
//Importing Layouts
import NavBar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
//Importing Web3 Services
import { Web3Service } from "../services/Web3Service";

const Main: NextPage = () => {
  const router = useRouter();
  const [connected, setConnected] = useState<Boolean>(true);
  //Initialize Metamask
  useEffect(() => {
    try {
      Web3Service.isConnected().then((con) => {
        setConnected(con);
        if (!con) {
          router.push({
            pathname: "/",
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div>
      <Head>
        <title>Kolumn</title>
        <meta name="Kolumn" content="Publish your articles on Blockchain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar connected={connected} />
      <div className="w-screen px-4 flex justify-center md:px-20 lg:px-40">
        <div className="w-full h-full  max-w-6xl flex justify-between items-center">
          <div className="w-3/4"></div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Main;
