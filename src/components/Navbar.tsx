import React from "react";
import { Link } from "react-router";

import LogoImage from "../assets/images/logo.png";

interface Props {
  setIsSidebarOpen: any;
}

const Navbar = ({ setIsSidebarOpen }: Props) => {
  return (
    <nav className="fixed top-0 left-0 h-[60px] w-full px-4 md:px-5 bg-[rgba(0,0,0,0.1)] backdrop-blur-md border-b border-neutral-900 z-50">
      <div className="h-[60px] flex flex-row justify-between items-center">
        {/* Left Div */}
        <div className="flex flex-row gap-4 items-center">
          <button
            className="rounded-full p-2 hover:bg-neutral-900 duration-300 cursor-pointer"
            onClick={() => setIsSidebarOpen((prevState: any) => !prevState)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fff"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <Link to={"/"}>
            <img src={LogoImage} className="h-6" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
