import { tablet } from "components/valiables/BreakPoint";
import { MAIN_COLOR } from "components/valiables/Color";
import React from "react";
import styled from "styled-components";

const ProductPage: React.FC = () => {

  return (
    <StyledWrapper>
      <h2>Product</h2>
      <StyledProductArticle>
        <StyledGithubLink href="https://github.com/haruchu/final-assignment"><img src="https://gh-card.dev/repos/haruchu/final-assignment.svg" /></StyledGithubLink>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis veritatis dolorum dolores amet! Perferendis, dolorem. Voluptatem quis veniam dolore possimus eos non. Sed amet accusantium quas. Aut quasi eius qui.
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
`

const StyledProductArticle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border: 6px solid ${MAIN_COLOR.LIGHT_BLUE};
  border-radius: 20px;
  transition: .5s;
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
`

const StyledGithubLink = styled.a`
  overflow: scroll;

`

