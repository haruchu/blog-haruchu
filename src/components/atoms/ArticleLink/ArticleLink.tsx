import { MAIN_COLOR } from "../../valiables/Color";
import React from "react";
import styled from "styled-components";
import ArticleTag from "../ArticleTag/ArticleTag";

export interface ArticleLinkProps {
  id: string;
  title: string;
  tags: string[];
  date: string;
  isAdmin: boolean;
}

const ArticleLink: React.FC<ArticleLinkProps> = ({
  id,
  title,
  tags,
  date,
  isAdmin,
}) => {
  return (
    <StyledLink
      href={
        (isAdmin ? "/" + process.env.REACT_APP_ADMIN_PATH : "") +
        "/article/" +
        id
      }
    >
      <StyledLinkTitle>{title}</StyledLinkTitle>
      <StyledTagsWrapper>
        {tags.map((tag, index) => (
          <ArticleTag
            key={index}
            index={index}
            tagName={tag}
            isAdmin={isAdmin}
          />
        ))}
      </StyledTagsWrapper>
      <StyledDate>{date}</StyledDate>
    </StyledLink>
  );
};
export default ArticleLink;

const StyledLink = styled.a`
  border: 6px solid ${MAIN_COLOR.LIGHT_BLUE};
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 280px;
  max-width: 280px;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
  text-decoration: none;
  transition: 0.5s;
  &:hover {
    border: 6px solid ${MAIN_COLOR.DARK_BLUE};
  }
`;

const StyledLinkTitle = styled.h4`
  text-align: center;
  margin: 0;
  font-size: 30px;
`;

const StyledTagsWrapper = styled.div`
  width: 80%;
  height: 20px;
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledDate = styled.span`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
