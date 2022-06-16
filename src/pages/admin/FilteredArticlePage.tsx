import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import styled from "styled-components";
import ArticleLink from "../../components/atoms/ArticleLink/ArticleLink";
import { MAIN_COLOR } from "../../components/valiables/Color";
import { useParams } from "react-router-dom";

type Articles = {
  id: string;
  title: string;
  tags: string[];
  date: string;
};

const AdminFileterdArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Articles[]>([]);
  const { tag } = useParams<string>();

  useEffect(() => {
    const usersCollectionRef = query(collection(db, "articles"), where("tags", "array-contains", tag));
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
      <h2>Articles</h2>
      <h4>タグ：{ tag }</h4>
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
export default AdminFileterdArticlesPage;

const StyledWrapper = styled.div`
  background-color: ${MAIN_COLOR.WHITE_BLUE};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
