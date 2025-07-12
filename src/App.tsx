import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} path="/" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
