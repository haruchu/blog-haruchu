import { COLOR, MAIN_COLOR } from "../../valiables/Color";
import React from "react";
import styled from "styled-components";

export interface ArticleLinkProps {
  id: string;
  title: string;
  tags: string[];
  date: string;
}

const AdminArticleLink: React.FC<ArticleLinkProps> = ({
  id,
  title,
  tags,
  date,
}) => {
  return (
    <StyledLink href={process.env.REACT_APP_ADMIN_PATH + "/articles/" + id}>
      <StyledLinkTitle>{title}</StyledLinkTitle>
      <StyledTagsWrapper>
        {tags.map((tag, index) => (
          <StyledTag key={index} index={index}>
            {tag}
          </StyledTag>
        ))}
      </StyledTagsWrapper>
      <StyledDate>{date}</StyledDate>
    </StyledLink>
  );
};
export default AdminArticleLink;

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

const StyledTag = styled.span<{ index: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 4px;
  margin: 0 4px;
  font-weight: 600;
  font-size: 8px;
  border-radius: 20px;
  transition: 0.5s;
  position: relative;
  ${(props) => `
    background-color: ${COLOR[props.index % 7]};
    color: ${COLOR[(props.index + 3) % 7]};
  `}
  &:hover {
    ${(props) => `
      color: ${COLOR[props.index % 7]};
      background-color: ${COLOR[(props.index + 3) % 7]};
  `}
  }
`;

const StyledDate = styled.span`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
