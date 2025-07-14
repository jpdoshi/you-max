import { useState } from "react";
import { Link } from "react-router";

import LogoImage from "../assets/images/logo.png";

interface Props {
  isSidebarOpen: boolean;
  setIsSidebarOpen: any;
}

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <nav className="fixed top-0 left-0 h-[50px] w-full px-4 md:px-5 bg-[rgba(0,0,0,0.5)] backdrop-blur-xl z-50">
      <div className="h-[50px] flex flex-row justify-between items-center">
        {/* Left Div */}
        <div className="flex flex-row gap-4 items-center">
          <button
            className={`rounded-full p-2 hover:bg-neutral-800 duration-300 cursor-pointer ${
              !isSidebarOpen && "rotate-180"
            }`}
            onClick={() => setIsSidebarOpen((prevState: any) => !prevState)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <Link to={"/"}>
            <img src={LogoImage} className="h-6" />
          </Link>
        </div>

        {/* Searchbar */}
        <div className="border border-neutral-700 bg-[rgba(255,255,255,0.125)] backdrop-blur-lg rounded-xl h-8 px-2 w-lg max-w-full flex flex-row gap-2 items-center">
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 text-sm outline-none"
            placeholder="What'd you like to watch?"
          />
          {searchQuery.trim() && (
            <button
              onClick={() => setSearchQuery("")}
              className="cursor-pointer"
            >
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
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
