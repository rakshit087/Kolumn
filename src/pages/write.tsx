import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
//Importing Layouts and Components
import NavBar from "../layouts/Navbar";
import { FiMail } from "react-icons/fi";
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
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  useEffect(() => {
    Web3Service.isConnected().then((con) => {
      setConnected(con);
      if (!con) {
        router.push({
          pathname: "/",
        });
      }
    });
  });
  return (
    <div>
      <Head>
        <title>Kolumn</title>
        <meta name="Kolumn" content="Publish your articles on Blockchain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar connected={connected} />
      <div className="w-screen px-4 flex flex-col justify-center items-center md:px-20 lg:px-40">
        {/* Title */}
        <input
          className="w-full max-w-6xl outline-none text-4xl font-merriweather my-10"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        {/* Text Editor */}
        <div
          className="w-full flex flex-col items-center justify-between"
          style={{ minHeight: "70vh" }}
        >
          <MyEditor
            id="main-editor"
            className="w-full font-poppins"
            setContent={setContent}
          />
          <button
            className="bg-frgrnd text-bkgrnd hover:bg-bkgrnd hover:text-frgrnd flex justify-center items-center w-14 h-14 text-3xl my-10 rounded-full transition-colors"
            onClick={() => {
              if (title.length != 0 && content.length != 0)
                Web3Service.postKolumn(title, content);
              // @TODO:Add a tost here
              else console.log("Please Enter Title and Content");
            }}
          >
            <FiMail />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
