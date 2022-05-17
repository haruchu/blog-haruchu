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
              <StyledTitleEditButtonWrapper>
                <EditButton onClick={() => setIsEditingTitle(!isEditingTitle)} />
              </StyledTitleEditButtonWrapper>
          </>
        )}
      </StyledTitle>
      <StyledDateWrapper>
        <StyledDate>更新日: {date}</StyledDate>
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
  justify-content: center;
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
  width: 100%;
  margin: 20px;
`;

const StyledDate = styled.span`
  margin-right: 20px;
  ${phone`
    font-size: 12px;
  `}
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
