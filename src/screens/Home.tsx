import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import useSidebar from "../hooks/Sidebar";

const Home = () => {
  const { isOpen } = useSidebar();

  return (
    <>
      <Navbar />
      <Sidebar />

      {/* Content */}
      <main className="px-4 md:px-5 mt-[60px]">
        <div className={`${isOpen ? "ml-[200px]" : "ml-[80px]"} py-6`}>
          <h1 className="text-2xl font-bold">Home Works!</h1>
        </div>
      </main>
    </>
  );
};

export default Home;
