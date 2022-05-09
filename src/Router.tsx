import React from "react";
import { Routes, Route } from "react-router-dom";
import ArticlesPage from "pages/ArticlesPage";
import ContributionsPage from "pages/ContributionsPage";
import HomePage from "pages/HomePage";

export const Router: React.VFC = () => {
  return (
    <Routes>
      <Route index element={<HomePage/>} />
      <Route path="articles" element={<ArticlesPage/>} />
      <Route path="contributions" element={<ContributionsPage/>} />
    </Routes>
  );
};
