import { useState } from "react";

const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return { isOpen, setIsOpen };
};

export default useSidebar;
