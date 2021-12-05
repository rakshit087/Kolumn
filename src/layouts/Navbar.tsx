import Link from "next/link";
import React from "react";
import ActionButton from "../components/ActionButton";
import { Web3Service } from "../services/Web3Service";

interface Props {
  connected: Boolean;
}

const NavBar = (props: Props) => {
  return (
    <div className="w-screen h-20 px-4 flex justify-center items-center border-b border-black bg-bkgrnd md:px-20 lg:px-40 transition-all">
      <div className="w-full h-full  max-w-6xl flex justify-between items-center">
        <Link href={props.connected ? "/app" : "/"} passHref>
          <p className="text-4xl font-poppins cursor-pointer">Kolumn</p>
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
