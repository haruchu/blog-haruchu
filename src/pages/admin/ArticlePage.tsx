import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import styled from "styled-components";
import Article from "../../components/Organisms/Article/Article";
import ReactDOM from "react-dom";
import dayjs from "dayjs";
import { tablet } from "../../components/valiables/BreakPoint";
import { BsFillTrashFill } from "react-icons/bs";

const AdminArticlePage: React.FC = () => {
  const { id } = useParams<string>();
  const usersCollectionRef = id && doc(db, "articles", id);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let article: any;

  const FormatContentWithLink = (content: string) => {
    const regexp_url = /((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g;
    const regexp_makeLink = function(all: string, url: string, h: string, href:string) {
        return '<a href="h' + href + '">' + url + '</a>';
    }
    const textWithLink = content.replace(regexp_url, regexp_makeLink);
    document.getElementById('article-content').innerHTML = textWithLink
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ContentChange = async (id: string, content: string, article: any) => {
    const today = new Date();
    await setDoc(
      doc(db, "articles", id),
      {
        title: article.title,
        content: FormatContentWithLink(content),
        date: dayjs(today).locale("ja").format("YYYY/MM/DD(dd)"),
        tags: article.tags,
      },
      { merge: true }
    );
    window.location.reload();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateTags = async (id: string, tags: string[], article: any) => {
    await setDoc(
      doc(db, "articles", id),
      {
        title: article.title,
        content: FormatContentWithLink(article.content),
        date: article.date,
        tags: tags,
      },
      { merge: true }
    );
    window.location.reload();
  };

  const onClick = async (id: string) => {
    await deleteDoc(doc(db, "articles", id));
    window.location.href =
      "/" + process.env.REACT_APP_ADMIN_PATH + "/articles/";
  };

  useEffect(() => {
    if (
      typeof id !== "undefined" &&
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
            isAdmin={true}
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
      {id && (
        <StyledButton onClick={() => onClick(id)}>
          <BsFillTrashFill />
        </StyledButton>
      )}
    </StyledWrapper>
  );
};
export default AdminArticlePage;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  position: relative;
`;

const StyledArticle = styled.div`
  margin: 0 100px;
  display: flex;
`;

const StyledButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: #333;
  border-radius: 4px;
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 10px;
  ${tablet`
      bottom: 10%;
      width: 40px;
      height: 40px;
      font-size: 20px;
  `}
  &:hover {
    opacity: 0.9;
  }
`;
