import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";

const MyRoutes = (
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </HashRouter>
);

export default MyRoutes;
