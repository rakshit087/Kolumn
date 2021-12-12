import LinkButton from "../components/LinkButton";

const Sidebar = () => {
  return (
    <div className="hidden md:flex md:flex-col items-end border-l-2 md:w-64 lg:w-72 b-l h-[calc(100vh-5rem)]">
      <div className="bg-bkgrnd w-56 lg:w-60 my-10 py-8 px-4">
        <p className="font-mono text-sm">Write on Konnect</p>
        <ul className="list-disc px-8 my-5 font-serif">
          <li>Own your Articles</li>
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
