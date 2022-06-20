/* eslint-disable react/jsx-key */
import { COLOR, MAIN_COLOR } from "../../valiables/Color";
import React from "react";
import styled from "styled-components";
import { RiDeleteBack2Fill } from "react-icons/ri";

interface ArticleTag {
  index: number;
  tagName: string;
  isAdmin: boolean;
  onDeleteTag?: (index: number) => void;
}

const ArticleTag: React.FC<ArticleTag> = ({
  index,
  tagName,
  isAdmin,
  onDeleteTag,
}) => {
  return (
    <StyledTag
      key={index}
      index={index}
      href={
        (isAdmin ? "/" + process.env.REACT_APP_ADMIN_PATH : "") +
        "/articles/" +
        tagName
      }
    >
      {tagName}
      {isAdmin ? (
        <StyledDeleteTagButton onClick={() => onDeleteTag(index)}>
          <RiDeleteBack2Fill />
        </StyledDeleteTagButton>
      ) : null}
    </StyledTag>
  );
};
export default ArticleTag;

const StyledTag = styled.a<{ index: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 30px 2px 4px;
  margin: 0 4px;
  font-weight: 600;
  font-size: 8px;
  border-radius: 20px;
  transition: 0.5s;
  position: relative;
  text-decoration: none;
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

const StyledDeleteTagButton = styled.button`
  background-color: transparent;
  display: flex;
  padding: 4px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transition: 0.5s;
  background-color: ${MAIN_COLOR.DARK_BLUE};
  &:hover {
    background-color: ${MAIN_COLOR.LIGHT_BLUE};
  }
`;
