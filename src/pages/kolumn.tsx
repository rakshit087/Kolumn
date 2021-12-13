import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Blocks from "editorjs-blocks-react-renderer";
//Importing Layouts
import NavBar from "../layouts/Navbar";
//Importing Web3 Services
import { Web3Service } from "../services/Web3Service";
import Loading from "../components/Loading";
import ActionButton from "../components/ActionButton";

const Kolumn: NextPage = () => {
  interface KolumnData {
    id: number;
    title: string;
    content: any;
    date: Date;
    author: string;
  }

  const router = useRouter();
  const [connected, setConnected] = useState<Boolean>(true);
  const [data, setData] = useState<undefined | KolumnData>(undefined);
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
          setData({
            id: parseInt(kolumn.id),
            title: kolumn.title,
            content: JSON.parse(kolumn.content),
            date: new Date(parseInt(kolumn.timestamp)),
            author: kolumn.author,
          });
        });
      } else {
        router.push({
          pathname: "/",
        });
      }
    });
  }, [router.isReady]);
  if (data == undefined)
    return (
      <div>
        <NavBar connected={connected} />
        <div className="w-screen flex justify-center items-center h-[calc(100vh-5rem)]">
          <Loading />
        </div>
      </div>
    );
  else
    return (
      <div>
        <NavBar connected={connected} />
        <div className="flex flex-col items-center justify-center w-screen px-4 transition-all md:px-20 lg:px-80">
          <div className="w-full max-w-6xl text-lg leading-7 md:leading-8">
            <h1 className="w-full max-w-6xl my-10 text-4xl outline-none font-merriweather">
              {data.title}
            </h1>
            <Blocks data={data.content} />
          </div>
          <ActionButton
            text="Tip"
            clickHandler={() => {
              Web3Service.sendTip(data.author, data.id);
            }}
          />
        </div>
      </div>
    );
};

export default Kolumn;
