import React from "react";
import { Routes, Route } from "react-router-dom";
import ArticlesPage from "./pages/ArticlesPage";
import HomePage from "./pages/HomePage";
import useMedia from "use-media";
import SideMenu from "./components/Molecules/Menu/SideMenu";
import BottomMenu from "./components/Molecules/Menu/BottomMenu";
import NotFoundPage from "./pages/NotFoundPage";
import SNSShowButton from "./components/Molecules/SNSShowButton/SNSShowButton";
import ArticlePage from "./pages/ArticlePage";
import ProductPage from "./pages/ProductPage";
import AdminArticlesPage from "./pages/admin/ArticlesPage";
import AdminArticlePage from "./pages/admin/ArticlePage";

export const Router: React.VFC = () => {
  const isWide = useMedia({ minWidth: "1025px" });

  return (
    <>
      {isWide ? (
        <SideMenu />
      ) : (
        <>
          <BottomMenu />
          <SNSShowButton />
        </>
      )}
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="articles" element={<ArticlesPage />} />
        <Route
          path={`${process.env.REACT_APP_ADMIN_PATH}/articles`}
          element={<AdminArticlesPage />}
        />
        <Route path="articles/:id" element={<ArticlePage />} />
        <Route
          path={`${process.env.REACT_APP_ADMIN_PATH}/articles/:id`}
          element={<AdminArticlePage />}
        />
        <Route path="product" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
