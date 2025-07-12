import React from "react";

interface Props {
  isSidebarOpen: boolean;
}

const Sidebar = ({ isSidebarOpen }: Props) => {
  return (
    <aside
      className={`fixed top-[60px] left-0 h-[calc(100vh-60px)] border-r border-neutral-900 bg-[rgba(0,0,0,0.1)] backdrop-blur-md p-3 overflow-x-hidden overflow-y-auto duration-300 ${
        isSidebarOpen ? "w-[200px]" : "w-[80px]"
      }`}
    >
      Sidebar Works!
    </aside>
  );
};

export default Sidebar;
