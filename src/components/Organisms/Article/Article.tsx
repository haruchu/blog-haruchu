import React, { useState } from "react";
import styled from "styled-components";
import Textarea, { onEditCompleteType } from "../../atoms/Textarea/Textarea";
import Input from "../../atoms/Input/Input";
import EditButton from "../../atoms/EditButton/EditButton";
import { phone } from "../../valiables/BreakPoint";
import AddTagInput from "components/atoms/AddTagInput/AddTagInput";
import { COLOR, MAIN_COLOR } from "components/valiables/Color";
import { RiDeleteBack2Fill } from "react-icons/ri";

interface ArticleProps {
  title: string;
  onTitleChange: onEditCompleteType;
  tags: string[];
  updateTag: (something: string[]) => void;
  article: string;
  onArticleChange: onEditCompleteType;
  date: string;
}

const Article: React.FC<ArticleProps> = ({
  title = "",
  onTitleChange,
  tags = [],
  updateTag,
  article = "",
  onArticleChange,
  date,
}) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingArticle, setIsEditingArticle] = useState(false);

  const onTitleEditComplete = (value: string) => {
    setIsEditingTitle(false);
    onTitleChange(value);
  };

  const onArticleEditComplete = (value: string) => {
    setIsEditingArticle(false);
    onArticleChange(value);
  };

  const onDeleteTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    updateTag(newTags);
  };

  const onAddTag = (value: string) => {
    const newTags = [...tags, value];
    updateTag(newTags);
  };

  return (
    <StyledWrapper>
      <StyledArticleHeader>
        <StyledTitle>
          {isEditingTitle ? (
            <Input defaultValue={title} onEditComplete={onTitleEditComplete} />
          ) : (
            <>
              <StyledTitleText>{title}</StyledTitleText>
              <StyledTitleEditButtonWrapper>
                <EditButton
                  onClick={() => setIsEditingTitle(!isEditingTitle)}
                />
              </StyledTitleEditButtonWrapper>
            </>
          )}
        </StyledTitle>
        <StyledDateWrapper>
          <StyledDate>更新日: {date}</StyledDate>
        </StyledDateWrapper>
        <StyledTagsWrapper>
        {tags.map((tag, index) => (
          <StyledTag key={index} index={index}>
            {tag}
            <StyledDeleteTagButton onClick={() => onDeleteTag(index)}>
              <RiDeleteBack2Fill />
            </StyledDeleteTagButton>
          </StyledTag>
        ))}
        <AddTagInput onEditComplete={(value) => onAddTag(value)} />
      </StyledTagsWrapper>
      </StyledArticleHeader>
      <StyledArticleContent>
        {isEditingArticle ? (
          <Textarea
            defaultValue={article}
            onEditComplete={onArticleEditComplete}
          />
        ) : (
          <>
            <StyledArticleText>{article}</StyledArticleText>
            <StyledContentEditButtonWrapper>
              <EditButton
                onClick={() => setIsEditingArticle(!isEditingArticle)}
              />
            </StyledContentEditButtonWrapper>
          </>
        )}
      </StyledArticleContent>
    </StyledWrapper>
  );
};
export default Article;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledArticleHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.div`
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
  position: relative;
`;

const StyledTitleText = styled.span`
  font-size: 30px;
  line-height: 35px;
  width: 100%;
  border-radius: 2px;
  padding: 10px 10px 10px 30px;
  text-align: center;
  ${phone`
    font-size: 20px;
  `}
`;

const StyledTitleEditButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
`;

const StyledDateWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px;
  width: 100%;
`;

const StyledDate = styled.span`
  margin-right: 20px;
  ${phone`
    font-size: 12px;
  `}
`;

const StyledTagsWrapper = styled.div`
  width: 80vw;
  height: 20px;
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  &::-webkit-scrollbar{
    display: none;
  }
`;

const StyledTag = styled.span<{ index: number }>`
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

const StyledArticleContent = styled.div`
  width: 90vw;
  display: flex;
  position: relative;
`;

const StyledContentEditButtonWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 30px;
`;

const StyledArticleText = styled.div`
  width: 90%;
  height: 400px;
  padding: 40px;
  font-size: 16px;
  box-sizing: border-box;
  ${phone`
    font-size: 12px;
  `}
`;
