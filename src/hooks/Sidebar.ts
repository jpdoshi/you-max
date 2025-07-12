import { useState } from "react";

const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return { isOpen, setIsOpen };
};

export default useSidebar;
