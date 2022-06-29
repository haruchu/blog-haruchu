import { tablet } from "../components/valiables/BreakPoint";
import { MAIN_COLOR } from "../components/valiables/Color";
import React from "react";
import styled from "styled-components";

const ProductPage: React.FC = () => {
  const repositories = [
    {
      link: "https://github.com/haruchu/blog-haruchu",
      imgLink: "https://gh-card.dev/repos/haruchu/blog-haruchu.png",
      text: "このブログのリポジトリ"
    },
    {
      link: "https://github.com/haruchu/sns-app",
      imgLink: "https://gh-card.dev/repos/haruchu/sns-app.svg",
      text: "Djangoを用いてSNSを作ってみた"
    },
    {
      link: "https://github.com/haruchu/diary",
      imgLink: "https://gh-card.dev/repos/haruchu/diary.svg",
      text: "Djangoを用いて日記アプリを作ってみた"
    },
    {
      link: "https://github.com/haruchu/pokedex",
      imgLink: "https://gh-card.dev/repos/haruchu/pokedex.png",
      text: "ポケモン図鑑を作ってみた"
    }
  ]
  return (
    <StyledWrapper>
      <h2>Product</h2>
      {repositories.map((repository, index) => (
        <StyledProductArticle key={index}>
          <StyledGithubLink href={repository.link}>
            <img src={repository.imgLink} />
          </StyledGithubLink>
          <p>{repository.text}</p>
        </StyledProductArticle>
      ))}
    </StyledWrapper>
  );
};
export default ProductPage;

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  padding-bottom: 100px;
  flex-direction: column;
  align-items: center;
  background-color: ${MAIN_COLOR.WHITE_BLUE};
`;

const StyledProductArticle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border: 6px solid ${MAIN_COLOR.LIGHT_BLUE};
  border-radius: 20px;
  transition: 0.5s;
  overflow: scroll;
  &:hover {
    border: 6px solid ${MAIN_COLOR.DARK_BLUE};
  }
  p {
    margin-left: 50px;
    width: 50%;
  }
  ${tablet`
      flex-direction: column;
      p {
        margin-left: 20px;
        width: 90%;
      }
  `}
`;

const StyledGithubLink = styled.a`
  width: fit-content;
`;
