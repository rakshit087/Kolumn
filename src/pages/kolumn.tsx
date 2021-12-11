import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Blocks from "editorjs-blocks-react-renderer";
//Importing Layouts
import NavBar from "../layouts/Navbar";
//Importing Web3 Services
import { Web3Service } from "../services/Web3Service";
import Loading from "../components/Loading";

const Kolumn: NextPage = () => {
  const router = useRouter();
  const [connected, setConnected] = useState<Boolean>(true);
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [content, setContent] = useState<any>(undefined);
  useEffect(() => {
    if (!router.isReady) return;
    const kid =
      router.query.kid != undefined
        ? parseInt(router.query.kid as string, 10)
        : 1;
    Web3Service.isConnected().then((con) => {
      setConnected(con);
      if (con) {
        Web3Service.getKolumnByID(kid).then((kolumn) => {
          setTitle(kolumn["_title"]);
          setContent(JSON.parse(kolumn["_content"]));
        });
      } else {
        router.push({
          pathname: "/",
        });
      }
    });
  }, [router.isReady]);
  if (title == undefined || content == undefined)
    return (
      <div>
        <NavBar connected={connected} />
        <Loading />
      </div>
    );
  else
    return (
      <div>
        <NavBar connected={connected} />
        <div className="w-screen px-4 flex flex-col justify-center items-center md:px-20 lg:px-80 transition-all">
          <div className="max-w-6xl w-full text-lg leading-7 md:leading-8">
            <h1 className="w-full max-w-6xl outline-none text-4xl font-merriweather my-10">
              {title}
            </h1>
            <Blocks data={content} />
          </div>
        </div>
      </div>
    );
};

export default Kolumn;
