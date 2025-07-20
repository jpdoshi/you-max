import { useState } from "react";
import { Link, useNavigate } from "react-router";

import LogoImage from "../assets/images/logo.png";

interface Props {
  isSidebarOpen: boolean;
  setIsSidebarOpen: any;
}

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 h-[50px] w-full px-2 md:px-5 bg-[rgba(0,0,0,0.67)] backdrop-blur-2xl z-50 border-b border-neutral-800">
      <div className="h-[50px] flex flex-row justify-between gap-2 items-center">
        {/* Left Div */}
        <div className="flex md:flex-row md:gap-2 items-center">
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
            <img src={LogoImage} className="hidden md:block h-7" />
          </Link>
        </div>

        {/* Searchbar */}
        <div className="border border-neutral-700 bg-[rgba(255,255,255,0.125)] backdrop-blur-lg rounded-xl h-8 w-lg max-w-full flex flex-row">
          <div className="h-full px-2.5 flex flex-1 gap-1 items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={(e) => {
                if (e.key == "Enter" && searchQuery.trim()) {
                  navigate(`/search/${searchQuery?.trim()}`);
                }
              }}
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
          <div
            onClick={() => {
              if (searchQuery?.trim())
                navigate(`/search/${searchQuery?.trim()}`);
            }}
            className="px-3 bg-neutral-700 hover:bg-neutral-600 duration-300 cursor-pointer rounded-r-xl flex justify-center items-center"
          >
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
