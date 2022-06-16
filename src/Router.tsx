import React from "react";
import { Routes, Route } from "react-router-dom";
import ArticlesPage from "./pages/ArticlesPage";
import FileteredArticlesPage from "./pages/FilteredArticlePage"
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
import AdminFileteredArticlesPage from "./pages/admin/FilteredArticlePage"

export const Router: React.FC = () => {
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
        <Route path="articles/:tag" element={<FileteredArticlesPage />} />
        <Route
          path={`${process.env.REACT_APP_ADMIN_PATH}/articles`}
          element={<AdminArticlesPage />}
        />
        <Route
          path={`${process.env.REACT_APP_ADMIN_PATH}/articles/:tag`}
          element={<AdminFileteredArticlesPage />}
        />
        <Route path="article/:id" element={<ArticlePage />} />
        <Route
          path={`${process.env.REACT_APP_ADMIN_PATH}/article/:id`}
          element={<AdminArticlePage />}
        />
        <Route path="product" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
