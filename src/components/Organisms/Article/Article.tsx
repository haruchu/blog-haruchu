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
  date: string;
}

const Article: React.FC<ArticleProps> = ({
  title = "",
  onTitleChange,
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

  return (
    <StyledWrapper>
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
      <StyledDateWrapper>
        <StyledDate>投稿日: {date}</StyledDate>
      </StyledDateWrapper>
      <StyledArticleContent>
        {isEditingArticle ? (
          <Textarea
            defaultValue={article}
            onEditComplete={onArticleEditComplete}
          />
        ) : (
          <>
            <StyledArticleText>{article}</StyledArticleText>
            <StyledButtonWrapper>
              <EditButton
                onClick={() => setIsEditingArticle(!isEditingArticle)}
              />
            </StyledButtonWrapper>
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
`;

const StyledTitle = styled.div`
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
`;

const StyledTitleText = styled.span`
  margin-right: 10px;
  font-size: 30px;
  line-height: 35px;
  width: 100%;
  border-radius: 2px;
  padding: 10px;
  ${phone`
    font-size: 20px;
  `}
`;

const StyledDateWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 20px;
`;

const StyledDate = styled.span`
  ${phone`
    font-size: 12px;
  `}
`;

const StyledArticleContent = styled.div`
  width: 90vw;
  display: flex;
  position: relative;
`;

const StyledButtonWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 30px;
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
