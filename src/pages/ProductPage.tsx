import { tablet } from "../components/valiables/BreakPoint";
import { MAIN_COLOR } from "../components/valiables/Color";
import React from "react";
import styled from "styled-components";

const ProductPage: React.FC = () => {
  return (
    <StyledWrapper>
      <h2>Product</h2>
      <StyledProductArticle>
        <StyledGithubLink href="https://github.com/haruchu/blog-haruchu">
          <img src="https://gh-card.dev/repos/haruchu/blog-haruchu.png"/>
        </StyledGithubLink>
        <p>
          このブログのリポジトリ
        </p>
      </StyledProductArticle>
      <StyledProductArticle>
        <StyledGithubLink href="https://github.com/haruchu/sns-app">
          <img src="https://gh-card.dev/repos/haruchu/sns-app.svg"/>
        </StyledGithubLink>
        <p>
          Djangoを用いてSNSを作ってみた
        </p>
      </StyledProductArticle>
      <StyledProductArticle>
        <StyledGithubLink href="https://github.com/haruchu/sns-app">
          <img src="https://gh-card.dev/repos/haruchu/diary.svg"/>
        </StyledGithubLink>
        <p>
          Djangoを用いて日記アプリを作ってみた
        </p>
      </StyledProductArticle>
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
  overflow: scroll;
  width: fit-content;
`;
