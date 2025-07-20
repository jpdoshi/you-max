import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import VideoDescription from "./screens/VideoDescription";
import SearchResults from "./screens/SearchResults";
import Navbar from "./components/Navbar";
import useSidebar from "./hooks/useSidebar";
import { useState } from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  const { isOpen, setIsOpen } = useSidebar();
  const [category, setCategory] = useState("Productivity");

  return (
    <BrowserRouter>
      <Navbar isSidebarOpen={isOpen} setIsSidebarOpen={setIsOpen} />
      <Sidebar
        isSidebarOpen={isOpen}
        category={category}
        setCategory={setCategory}
      />
      <Routes>
        <Route
          index
          element={<Home category={category} isSidebarOpen={isOpen} />}
          path="/"
        />
        <Route element={<VideoDescription />} path="/watch/:videoId" />
        <Route
          element={<SearchResults isSidebarOpen={isOpen} />}
          path="/search/:query"
        />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
