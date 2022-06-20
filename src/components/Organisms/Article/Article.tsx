import React, { useState } from "react";
import styled from "styled-components";
import Textarea, { onEditCompleteType } from "../../atoms/Textarea/Textarea";
import Input from "../../atoms/Input/Input";
import EditButton from "../../atoms/EditButton/EditButton";
import { phone } from "../../valiables/BreakPoint";
import AddTagInput from "../../atoms/AddTagInput/AddTagInput";
import ArticleTag from "../../atoms/ArticleTag/ArticleTag";

interface ArticleProps {
  title: string;
  onTitleChange: onEditCompleteType;
  tags: string[];
  updateTag: (something: string[]) => void;
  article: string;
  onArticleChange: onEditCompleteType;
  date: string;
  isAdmin: boolean;
}

const Article: React.FC<ArticleProps> = ({
  title = "",
  onTitleChange,
  tags = [],
  updateTag,
  article = "",
  onArticleChange,
  date,
  isAdmin,
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
              {isAdmin ? (
                <StyledTitleEditButtonWrapper>
                  <EditButton
                    onClick={() => setIsEditingTitle(!isEditingTitle)}
                  />
                </StyledTitleEditButtonWrapper>
              ) : null}
            </>
          )}
        </StyledTitle>
        <StyledDateWrapper>
          <StyledDate>更新日: {date}</StyledDate>
        </StyledDateWrapper>
        <StyledTagsWrapper>
          {tags.map((tag, index) => (
            <ArticleTag
              key={index}
              index={index}
              tagName={tag}
              isAdmin={isAdmin}
              onDeleteTag={() => onDeleteTag(index)}
            />
          ))}
          {isAdmin ? (
            <AddTagInput onEditComplete={(value) => onAddTag(value)} />
          ) : null}
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
            <StyledArticleText id="article-content">
              {article}
            </StyledArticleText>
            {isAdmin ? (
              <StyledContentEditButtonWrapper>
                <EditButton
                  onClick={() => setIsEditingArticle(!isEditingArticle)}
                />
              </StyledContentEditButtonWrapper>
            ) : null}
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
  justify-content: center;
  overflow-x: scroll;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
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
  white-space: pre-wrap;
  ${phone`
    font-size: 12px;
  `}
`;
