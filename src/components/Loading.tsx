import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center mt-10 ">
      <div className=" animate-spin rounded-full h-16 w-16 border-r-2 border-b-2 border-frgrnd fixed top-1/2"></div>
    </div>
  );
};

export default Loading;
