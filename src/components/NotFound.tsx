const NotFound = () => {
  return (
    <div className="h-screen w-screen bg-bkgrnd flex flex-col justify-center items-center text-center px-4">
      <p className="text-3xl">MetaMask Not Found in your Browser</p>
      <a href="https://metamask.io/download">
        <div className="mt-10 bg-frgrnd text-bkgrnd w-60 h-14 flex justify-center items-center cursor-pointer">
          Download MetaMask
        </div>
      </a>
    </div>
  );
};

export default NotFound;
