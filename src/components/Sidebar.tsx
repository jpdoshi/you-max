import React from "react";
import useSidebar from "../hooks/Sidebar";

const Sidebar = () => {
  const { isOpen } = useSidebar();

  return (
    <aside
      className={`fixed top-[60px] left-0 h-[calc(100vh-60px)] border-r border-neutral-900 p-3 ${
        isOpen ? "w-[200px]" : "w-[80px]"
      }`}
    >
      Sidebar Works!
    </aside>
  );
};

export default Sidebar;
