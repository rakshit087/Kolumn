import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { Web3Service } from "../services/Web3Service";

interface Props {
  kolumnID: number;
  tips: number;
}

const sendTipsButton = (props: Props) => {
  const [sendTipState, setSendTipState] = useState<Boolean>(false);
  const [amount, setAmount] = useState<number>(0);
  return (
    <div className="flex flex-col">
      <button
        className="w-32 h-9 text-bkgrnd bg-frgrnd font-poppins"
        onClick={() => {
          setSendTipState(!sendTipState);
        }}
      >
        <div className="flex justify-center w-full">
          <p className="mr-2">
            {(props.tips / 1000000000000000000).toString()} MATIC
          </p>
        </div>
      </button>
      <div
        className="fixed z-10 flex items-center mt-12 "
        style={sendTipState ? { display: "flex" } : { display: "none" }}
      >
        <input
          className="w-24 font-mono border-2 outline-none h-9 border-frgrnd"
          type="number"
          onChange={(a: any) => {
            setAmount(a.target.value);
          }}
        ></input>
        <button
          className="flex items-center justify-center w-8 text-xl h-9 bg-frgrnd text-bkgrnd"
          onClick={() => {
            Web3Service.sendTip(props.kolumnID, amount);
            setSendTipState(false);
          }}
        >
          <IoIosSend />
        </button>
      </div>
    </div>
  );
};

export default sendTipsButton;
