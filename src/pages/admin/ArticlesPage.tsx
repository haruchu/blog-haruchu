import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import styled from "styled-components";
import ArticleLink from "components/atoms/ArticleLink/ArticleLink";
import { MAIN_COLOR } from "components/valiables/Color";
import { GrAdd } from "react-icons/gr";
import dayjs from "dayjs";
import { phone, tablet } from "components/valiables/BreakPoint";

type Articles = {
  id: string;
  title: string;
  tags: string[];
  date: string;
};

const CreateNewArticle = async () => {
  const today = new Date();
  const docRef = await addDoc(collection(db, "articles"), {
    title: "",
    tags: [],
    date: dayjs(today).locale("ja").format("YYYY/MM/DD(dd)"),
    content: "",
  });
  window.location.href = "/admin/articles/" + docRef.id;
};

const AdminArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Articles[]>([]);

  useEffect(() => {
    const usersCollectionRef = collection(db, "articles");
    getDocs(usersCollectionRef).then((querySnapshot) => {
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
      <NewArticleButton onClick={CreateNewArticle}>
        <GrAdd />
      </NewArticleButton>
    </StyledWrapper>
  );
};
export default AdminArticlesPage;

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

const NewArticleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 6%;
  right: 2%;
  ${tablet`
    bottom: 10%;
  `}
  ${phone`
    bottom: 15%;
  `}
  background-color: ${MAIN_COLOR.LIGHT_BLUE};
  border: 2px solid ${MAIN_COLOR.DARK_BLUE};
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: ${MAIN_COLOR.DARK_BLUE};
  }
`;
