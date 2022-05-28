import { doc, getDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import styled from "styled-components";
import Article from "../components/Organisms/Article/Article";
import ReactDOM from "react-dom";

const ArticlePage: React.FC = () => {
  const { id } = useParams<string>();
  const usersCollectionRef = id && doc(db, "articles", id);
  let article: any;

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
            onTitleChange={(title) => console.log(title)}
            tags={article.tags}
            updateTag={(tags) => console.log(tags)}
            article={article.content}
            onArticleChange={(content) => console.log(content)}
            date={article.date}
            isAdmin={false}
          />
        );
        const articleDiv = document.getElementById("article");
        ReactDOM.render(articleDOM, articleDiv);
      });
    }
  }, [article]);

  return (
    <StyledWrapper>
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
