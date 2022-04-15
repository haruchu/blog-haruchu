import React from "react";
import { Routes, Route } from "react-router-dom";
import { SampleHome } from "./components/SampleHome";
import { SamplePage1 } from "./components/SamplePage1";
import { SamplePage2 } from "./components/SamplePage2";

export const Router: React.VFC = () => {
  return (
    <Routes>
      <Route index element={<SampleHome />} />
      <Route path="page1" element={<SamplePage1 />} />
      <Route path="page2" element={<SamplePage2 />} />
    </Routes>
  );
};
