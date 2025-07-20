import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import useSidebar from "../hooks/useSidebar";
import Feed from "../components/Feed";
import { useState } from "react";

const Home = () => {
  const { isOpen, setIsOpen } = useSidebar();
  const [category, setCategory] = useState<string>("Productivity");

  return (
    <div>
      <Navbar isSidebarOpen={isOpen} setIsSidebarOpen={setIsOpen} />
      <Sidebar
        isSidebarOpen={isOpen}
        category={category}
        setCategory={setCategory}
      />

      {/* Content */}
      <main className="px-4 md:px-5 mt-[50px]">
        <div className={`pt-3 duration-300 ${isOpen && "md:ml-[200px]"}`}>
          <div className="mb-4">
            <h2 className="font-extrabold text-2xl">
              Latest <span className="text-primary">{category}</span> Videos
            </h2>
            <p className="text-sm font-medium pt-1">
              Explore Videos without distraction with Max focus on what matters
            </p>
          </div>
          {/* <Feed category={category} /> */}
        </div>
      </main>
    </div>
  );
};

export default Home;
