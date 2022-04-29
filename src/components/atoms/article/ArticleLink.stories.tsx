import React from "react";
import ArticleLink from "./ArticleLink";

export default {
  component: ArticleLink,
  title: "Atoms/ArticleLink",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Basic = () => {
  const article = {
    title: "タイトル",
    tags: ["フロンドエンド", "バックエンド"],
    date: "2022-04-26",
  };
  return <ArticleLink article={article} />;
};
