import React from "react";
import Article from "./Article";

export default {
  component: Article,
  title: "Organisms/Article",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Basic = () => {
  return (
    <Article
      title="タイトル"
      onTitleChange={() => console.log("タイトル編集したお")}
      tags={["フロントエンド", "バックエンド"]}
      updateTag={() => console.log("tagを編集")}
      article="記事ですよぉ"
      onArticleChange={() => console.log("記事を編集したお")}
      date="2022-04-29"
      isAdmin={true}
    />
  );
};
