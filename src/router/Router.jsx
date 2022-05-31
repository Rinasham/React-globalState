import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Main } from "../components/Main";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
};
