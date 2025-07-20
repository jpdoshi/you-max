import { useState } from "react";

const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);
  return { isOpen, setIsOpen };
};

export default useSidebar;
