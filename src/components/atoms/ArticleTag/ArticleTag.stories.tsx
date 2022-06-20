import React from "react";
import ArticleTag from "./ArticleTag";

export default {
  component: ArticleTag,
  title: "Atoms/ArticleTag",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Basic = () => {
  return (
    <ArticleTag
      index={1}
      tagName={"フロントエンド"}
      isAdmin={true}
      onDeleteTag={() => console.log("delete")}
    />
  );
};
