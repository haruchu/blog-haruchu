import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ArticlesPage from "pages/ArticlesPage";
import ContributionsPage from "pages/ContributionsPage";
import HomePage from "pages/HomePage";
import useMedia from "use-media";
import SideMenu from "components/Molecules/Menu/SideMenu";
import BottomMenu from "components/Molecules/Menu/BottomMenu";
import styled from "styled-components";
import NotFoundPage from "pages/NotFoundPage";
import SNSShowButton from "components/Molecules/SNSShowButton/SNSShowButton";

export const Router: React.VFC = () => {
  const isWide = useMedia({ minWidth: "1025px" });

  return (
    <>
      {isWide ? <SideMenu /> : <><BottomMenu /><SNSShowButton/></>}
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="contributions" element={<ContributionsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
