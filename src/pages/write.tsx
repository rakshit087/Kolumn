import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
//Importing Layouts and Components
import NavBar from "../layouts/Navbar";
//Importing Web3 Services
import { Web3Service } from "../services/Web3Service";

const MyEditor = dynamic(
  () => {
    return import("../components/Editor");
  },
  { ssr: false }
);

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
      <NavBar connected={connected} />
      <div className="w-screen px-4 flex flex-col justify-center items-center md:px-20 lg:px-40">
        <input
          className="w-full max-w-6xl outline-none text-4xl font-merriweather my-10"
          placeholder="Title"
        ></input>
        <MyEditor id="main-editor" className="w-full font-poppins" />
      </div>
    </div>
  );
};

export default App;
