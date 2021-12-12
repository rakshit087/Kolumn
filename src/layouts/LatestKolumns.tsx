import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import WideKol from "../components/WideKol";
import { Web3Service } from "../services/Web3Service";

const LatestKolumns = () => {
  const [data, setData] = useState<any>(undefined);
  useEffect(() => {
    Web3Service.getLatestKolumns().then((kol) => {
      setData(kol);
      console.log(data);
      console.log(
        JSON.parse(kol[0].content).blocks.filter(
          (block: any) => block.type == "paragraph"
        )[0]
      );
    });
  }, []);
  return data == undefined ? (
    <div className="flex justify-center md:w-11/12">
      <Loading />
    </div>
  ) : (
    <div className="mt-10">
      {data.map((kol: any) => {
        let content = JSON.parse(kol.content)
          .blocks.filter((block: any) => block.type == "paragraph")[0]
          .data.text.slice(0, 200);
        content = content.replace(/<[^>]*>/g, " ");
        content = content.replace(/&nbsp;/g, " ");
        return (
          <WideKol
            author={kol.author}
            title={kol.title}
            content={content}
            time={kol.timestamp}
          />
        );
      })}
    </div>
  );
};

export default LatestKolumns;
