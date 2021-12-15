import LinkButton from "../components/LinkButton";

const Sidebar = () => {
  return (
    <div className="sticky top-20 hidden md:flex md:flex-col items-end border-l-2 md:w-64 lg:w-72 b-l h-[calc(100vh-5rem)]">
      <div className="w-56 px-4 py-8 my-10 bg-bkgrnd lg:w-60">
        <p className="font-mono text-sm">Write on Kolumn</p>
        <ul className="px-8 my-5 font-serif list-disc">
          <li>Own your Work</li>
          <li>Earn Crypto!</li>
        </ul>
        <div className="px-4">
          <LinkButton text="Write 📝" link="/write" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
