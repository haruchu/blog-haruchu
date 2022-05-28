import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import styled from "styled-components";
import ArticleLink from "../components/atoms/ArticleLink/ArticleLink";
import { MAIN_COLOR } from "../components/valiables/Color";

type Articles = {
  id: string;
  title: string;
  tags: string[];
  date: string;
};

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Articles[]>([]);

  useEffect(() => {
    const usersCollectionRef = collection(db, "articles");
    getDocs(usersCollectionRef).then((querySnapshot) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newArticles: any[] = [];
      querySnapshot.forEach((doc) => {
        newArticles.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setArticles(newArticles);
    });
  }, []);

  return (
    <StyledWrapper>
      <StyledArticleWrapper>
        {articles.map((article) => (
          <ArticleLink
            key={article.id}
            id={article.id}
            title={article.title}
            tags={article.tags}
            date={article.date}
          />
        ))}
      </StyledArticleWrapper>
      <StyledHiddenLink
        href={"/" + process.env.REACT_APP_ADMIN_PATH + "/articles/"}
      />
    </StyledWrapper>
  );
};
export default ArticlesPage;

const StyledWrapper = styled.div`
  background-color: ${MAIN_COLOR.WHITE_BLUE};
  height: 100vh;
`;

const StyledArticleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const StyledHiddenLink = styled.a`
  width: 16px;
  height: 16px;
  background-color: ${MAIN_COLOR.WHITE_BLUE};
  position: absolute;
  bottom: 10%;
  right: 5%;
`;
