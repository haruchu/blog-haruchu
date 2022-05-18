import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import styled from "styled-components";
import Article from "../components/Organisms/Article/Article";
import ReactDOM from "react-dom";
import dayjs from "dayjs";

const ArticlePage: React.FC = () => {
  const { id } = useParams<string>();
  const usersCollectionRef = id && doc(db, "articles", id);
  let article: any;

  const TitleChange = async (id: string, title: string, article: any) => {
    const today = new Date();
    await setDoc(
      doc(db, "articles", id),
      {
        title: title,
        content: article.content,
        date: dayjs(today).locale("ja").format("YYYY/MM/DD(dd)"),
        tags: article.tags,
      },
      { merge: true }
    );
    window.location.reload();
  };

  const ContentChange = async (id: string, content: string, article: any) => {
    const today = new Date();
    await setDoc(
      doc(db, "articles", id),
      {
        title: article.title,
        content: content,
        date: dayjs(today).locale("ja").format("YYYY/MM/DD(dd)"),
        tags: article.tags,
      },
      { merge: true }
    );
    window.location.reload();
  };

  const updateTags = async (id: string, tags: string[], article: any) => {
    await setDoc(
      doc(db, "articles", id),
      {
        title: article.title,
        content: article.content,
        date: article.date,
        tags: tags,
      },
      { merge: true }
    );
    window.location.reload();
  };

  useEffect(() => {
    if (
      typeof id !== "undefined" &&
      usersCollectionRef !== "" &&
      typeof usersCollectionRef !== "undefined"
    ) {
      getDoc(usersCollectionRef).then((documentSnapshot) => {
        article = documentSnapshot.data();
        console.log(article);
        const articleDOM = (
          <Article
            title={article.title}
            onTitleChange={(title) => TitleChange(id, title, article)}
            tags={article.tags}
            updateTag={(tags) => updateTags(id, tags, article)}
            article={article.content}
            onArticleChange={(content) => ContentChange(id, content, article)}
            date={article.date}
          />
        );
        const articleDiv = document.getElementById("article");
        ReactDOM.render(articleDOM, articleDiv);
      });
    }
  }, [article]);

  return (
    <StyledWrapper id="article">
      <StyledArticle id="article"></StyledArticle>
    </StyledWrapper>
  );
};
export default ArticlePage;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const StyledArticle = styled.div`
  margin: 0 100px;
`;
