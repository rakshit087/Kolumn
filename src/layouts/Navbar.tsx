import Link from "next/link";
import React from "react";
import ActionButton from "../components/ActionButton";
import { Web3Service } from "../services/Web3Service";

interface Props {
  connected: Boolean;
}

const NavBar = (props: Props) => {
  return (
    <div className="sticky top-0 z-10 flex justify-center w-screen h-20 px-4 transition-all border-b border-black bg-bkgrnd md:px-20 lg:px-40">
      <div className="flex items-center justify-between w-full h-full max-w-6xl">
        <Link href={props.connected ? "/main" : "/"} passHref>
          <p className="text-4xl cursor-pointer font-poppins">Kolumn</p>
        </Link>
        {props.connected ? (
          <ActionButton text="Connected" clickHandler={(): any => {}} />
        ) : (
          <ActionButton
            text="Connect"
            clickHandler={(): any => Web3Service.connect()}
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
