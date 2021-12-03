import { NextPage } from "next";
import React from "react";

const FrontBox: NextPage = () => {
  return (
    <div className="w-screen h-96 px-4 flex justify-center items-center border-b border-black bg-bkgrnd md:px-20 lg:px-40">
      <div className="w-full h-full max-w-6xl flex items-center">
        {/* Contains Front Box Text */}
        <div className="max-w-lg md:max-w-xl lg:max-w-2xl">
          <h1 className="text-5xl font-light mb-2 font-merriweather md:text-6xl md:mb-3 lg:mb-4 lg:text-7xl">
            Read amazing articles or create your own
          </h1>
          <h4 className="mt-2 text-xl lg:text-2xl lg:mt-4">
            and publish them on Blockchain
          </h4>
        </div>
      </div>
    </div>
  );
};

export default FrontBox;
