import React from "react";

import { useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import styled from "styled-components";

const ArticlesPage: React.FC = () => {

  useEffect(() => {
    const usersCollectionRef = collection(db, 'articles');
    getDocs(usersCollectionRef).then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => console.log(doc.data()));
    });  }, []);

  return <>ArticlesPage</>;
};
export default ArticlesPage;
