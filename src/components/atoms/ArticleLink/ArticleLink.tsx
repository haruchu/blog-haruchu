import { COLOR, MAIN_COLOR } from "../../valiables/Color";
import React from "react";
import styled from "styled-components";

export interface ArticleLinkProps {
  id: string;
  title: string;
  tags: string[];
  date: string;
}

const ArticleLink: React.FC<ArticleLinkProps> = ({ id, title, tags, date }) => {
  return (
    <StyledLink href={"articles/" + id}>
      <StyledLinkTitle>{title}</StyledLinkTitle>
      <StyledTags>
        {tags.map((tag, index) => (
          <StyledTag key={index} index={index}>
            {tag}
          </StyledTag>
        ))}
      </StyledTags>
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
  flex-direction: column;
  width: 400px;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
  text-decoration: none;
  position: relative;
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

const StyledTags = styled.div`
  display: flex;
  margin: 8px;
`;

const StyledTag = styled.span<{ index: number }>`
  display: block;
  width: auto;
  padding: 2px 6px;
  margin: 0 4px;
  font-weight: 600;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-decoration: none;
  border-radius: 20px;
  transition: 0.5s;
  ${(props) => `
    background-color: ${COLOR[props.index % 7]};
    color: ${COLOR[(props.index % 7) + 3]};
  `}
  &:hover {
    ${(props) => `
      color: ${COLOR[props.index % 7]};
      background-color: ${COLOR[(props.index % 7) + 3]};
  `}
  }
`;

const StyledDate = styled.span`
  position: absolute;
  right: 12px;
  bottom: 8px;
`;
