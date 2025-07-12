import React from "react";
import { Link } from "react-router";

import LogoImage from "../assets/images/logo.png";

interface Props {
  setIsSidebarOpen: any;
}

const Navbar = ({ setIsSidebarOpen }: Props) => {
  return (
    <nav className="fixed top-0 left-0 h-[60px] w-full px-4 md:px-5 bg-[rgba(0,0,0,0.1)] backdrop-blur-md border-b border-neutral-800 z-50">
      <div className="h-[60px] flex flex-row justify-between items-center">
        {/* Left Div */}
        <div className="flex flex-row gap-4 items-center">
          <button
            className="rounded-full p-2 hover:bg-neutral-800 duration-300 cursor-pointer"
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

        {/* Searchbar */}
        <div className="border border-neutral-700 bg-[rgba(255,255,255,0.1)] rounded-xl h-9 px-3 w-lg max-w-full flex flex-row gap-2.5 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#fff"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            className="flex-1 text-sm outline-none"
            placeholder="What'd you like to watch?"
          />
        </div>

        {/* Right Div */}
        <div className="flex flex-row gap-1 items-center">
          <button className="p-2 hover:bg-neutral-800 rounded-full duration-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </button>
          <button className="p-2 hover:bg-neutral-800 rounded-full duration-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
