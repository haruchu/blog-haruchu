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

export const AdminArticleLink = () => {
  const article = {
    title: "タイトル",
    tags: ["フロンドエンド", "バックエンド"],
    date: "2022-04-26",
  };
  return (
    <ArticleLink
      id="1"
      title={article.title}
      tags={article.tags}
      date={article.date}
      isAdmin={true}
    />
  );
};

export const NotAdminArticleLink = () => {
  const article = {
    title: "タイトル",
    tags: ["フロンドエンド", "バックエンド"],
    date: "2022-04-26",
  };
  return (
    <ArticleLink
      id="1"
      title={article.title}
      tags={article.tags}
      date={article.date}
      isAdmin={false}
    />
  );
};
