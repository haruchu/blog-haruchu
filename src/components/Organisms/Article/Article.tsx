import { MAIN_COLOR } from "../../valiables/Color";
import React, { useState } from "react";
import styled from "styled-components";
import Textarea, { onEditCompleteType } from "../../atoms/Textarea/Textarea";
import Input from "../../atoms/Input/Input";
import EditButton from "../../atoms/EditButton/EditButton";
import { phone } from "../../valiables/BreakPoint";

interface ArticleProps {
  title: string;
  onTitleChange: onEditCompleteType;
  article: string;
  onArticleChange: onEditCompleteType;
}

const Article: React.FC<ArticleProps> = ({
  title = "",
  onTitleChange,
  article = "",
  onArticleChange,
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

  return (
    <>
      <StyledTitle>
        {isEditingTitle ? (
          <Input defaultValue={title} onEditComplete={onTitleEditComplete} />
        ) : (
          <>
            <StyledTitleText>{title}</StyledTitleText>
            <EditButton onClick={() => setIsEditingTitle(!isEditingTitle)} />
          </>
        )}
      </StyledTitle>
      <StyledArticleContent>
        {isEditingArticle ? (
          <Textarea
            defaultValue={article}
            onEditComplete={onArticleEditComplete}
          />
        ) : (
          <>
            <StyledArticleText>{article}</StyledArticleText>
            <EditButton
              onClick={() => setIsEditingArticle(!isEditingArticle)}
            />
          </>
        )}
      </StyledArticleContent>
    </>
  );
};
export default Article;

const StyledTitle = styled.div`
  width: 90vw;
  display: flex;
  align-items: center;
`;

const StyledTitleText = styled.span`
  margin-right: 10px;
  font-size: 30px;
  line-height: 20px;
  width: 100%;
  border-radius: 2px;
  padding: 10px;
`;

const StyledArticleContent = styled.div`
  width: 90vw;
  display: flex;
`;

const StyledArticleText = styled.div`
  width: 90%;
  height: 400px;
  padding: 40px;
  font-size: 16px;
  ${phone`
    font-size: 12px;
  `}
`;
