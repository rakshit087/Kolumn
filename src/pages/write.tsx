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
    return import("../components/MyEditor");
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
      <div className="flex flex-col items-center justify-center w-screen px-4 font-merriweather md:px-20 lg:px-40">
        {/* Title */}
        <input
          className="w-full max-w-6xl my-10 text-4xl outline-none"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        {/* Text Editor */}
        <div
          className="flex flex-col items-center justify-between w-full text-lg leading-7 md:text-xl md:leading-8 "
          style={{ minHeight: "70vh" }}
        >
          <MyEditor
            id="main-editor"
            className="w-full font-poppins"
            content={content}
            setContent={setContent}
          />
          <button
            className="flex items-center justify-center my-10 text-3xl transition-colors rounded-full bg-frgrnd text-bkgrnd hover:bg-bkgrnd hover:text-frgrnd w-14 h-14"
            onClick={() => {
              console.log(content);
              // if (title.length != 0 && content.length != 0)
              //   Web3Service.postKolumn(title, content);
              // // @TODO:Add a tost here
              // else console.log("Please Enter Title and Content");
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
