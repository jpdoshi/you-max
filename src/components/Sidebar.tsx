import React from "react";

interface Props {
  isSidebarOpen: boolean;
}

const Sidebar = ({ isSidebarOpen }: Props) => {
  return (
    <aside
      className={`fixed top-[60px] left-0 h-[calc(100vh-60px)] border-r border-neutral-900 p-3 overflow-x-hidden overflow-y-auto ${
        isSidebarOpen ? "w-[200px]" : "w-[80px]"
      }`}
    >
      Sidebar Works!
    </aside>
  );
};

export default Sidebar;
