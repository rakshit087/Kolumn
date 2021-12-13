import { NextPage } from "next";
import React from "react";

const FrontBox: NextPage = () => {
  return (
    <div className="flex items-center justify-center w-screen px-4 border-b border-black h-96 bg-bkgrnd md:px-20 lg:px-40">
      <div className="flex items-center w-full h-full max-w-6xl">
        {/* Contains Front Box Text */}
        <div className="max-w-lg md:max-w-xl lg:max-w-2xl">
          <h1 className="mb-2 text-5xl font-light font-merriweather md:text-6xl md:mb-3 lg:mb-4 lg:text-7xl">
            Read amazing stories or share your own
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
