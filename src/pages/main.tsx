import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LinkButton from "../components/LinkButton";
import LatestKolumns from "../layouts/LatestKolumns";
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
        <div className="w-full h-full  max-w-6xl flex justify-between">
          <div className="w-full md:w-[calc(100%-16rem)] lg:w-[calc(100%-18rem)] ">
            <LatestKolumns />
          </div>
          <Sidebar />
        </div>
      </div>
      <div className="fixed right-0 m-4 z-10 bottom-0  md:hidden">
        <LinkButton text="Write 📝" link="/write" />
      </div>
    </div>
  );
};

export default Main;
