import React, { useState } from "react";
import { useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import styled from "styled-components";
import ArticleLink from "components/atoms/ArticleLink/ArticleLink";


type Articles = {
  id: string;
  title: string;
  tags: string[];
  date: string;
}

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Articles[]>([]);

  useEffect(() => {
    const usersCollectionRef = collection(db, 'articles');
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
    console.log(articles);
  }, []);


  return (
    <>
      {articles.map((article) => (
        <ArticleLink key={article.id} title={article.title} tags={article.tags} date={article.date} />
      ))}
    </>
  );
};
export default ArticlesPage;
