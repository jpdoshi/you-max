import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import VideoDescription from "./screens/VideoDescription";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} path="/" />
        <Route
          element={<VideoDescription />}
          path="/watch/:descriptionId/:videoId"
        />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
