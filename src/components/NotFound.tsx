const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen px-4 text-center bg-bkgrnd">
      <p className="text-3xl">MetaMask Not Found in your Browser</p>
      <a href="https://metamask.io/download">
        <div className="flex items-center justify-center mt-10 cursor-pointer bg-frgrnd text-bkgrnd w-60 h-14">
          Download MetaMask
        </div>
      </a>
    </div>
  );
};

export default NotFound;
