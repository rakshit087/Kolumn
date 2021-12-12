import Link from "next/link";
import { useEffect, useState } from "react";
import ActionButton from "../components/ActionButton";
import Loading from "../components/Loading";
import WideKol from "../components/WideKol";
import { Web3Service } from "../services/Web3Service";

const LatestKolumns = () => {
  const [data, setData] = useState<any>(undefined);
  const [page, setPage] = useState<number>(1);
  const [morePages, setMorePages] = useState<Boolean>(true);
  useEffect(() => {
    Web3Service.getLatestKolumns(1).then((kol) => {
      setData(kol);
      if (kol.length == 10) setMorePages(true);
    });
  }, []);
  return data == undefined ? (
    <div className="flex justify-center md:w-11/12">
      <Loading />
    </div>
  ) : (
    <div className="mt-10">
      {data.map((kol: any, index: number) => {
        let content = JSON.parse(kol.content)
          .blocks.filter((block: any) => block.type == "paragraph")[0]
          .data.text.slice(0, 200);
        content = content.replace(/<[^>]*>/g, " ");
        content = content.replace(/&nbsp;/g, " ");
        console.log(kol.timestamp);
        return (
          <WideKol
            key={index}
            id={kol.id}
            author={kol.author}
            title={kol.title}
            content={content}
            time={kol.timestamp}
          />
        );
      })}
      <div
        className="w-full justify-center"
        style={morePages ? { display: "flex" } : { display: "none" }}
      >
        <ActionButton
          text="Load More"
          clickHandler={() => {
            setPage(page + 1);
            Web3Service.getLatestKolumns(page).then((kol) => {
              setData((prev: any) => [...prev, kol]);
              if (kol.length == 10) setMorePages(true);
            });
          }}
        />
      </div>
    </div>
  );
};

export default LatestKolumns;
