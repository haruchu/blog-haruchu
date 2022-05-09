import Skills from "components/Molecules/Skills/Skills";
import ProfileIcon from "../components/assets/profile.jpg";
import React from "react";
import styled from "styled-components";
import { phone } from "components/valiables/BreakPoint";
import { MAIN_COLOR } from "components/valiables/Color";

const HomePage: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledProfileWrapper>
        <StyledProfileIcon src={ProfileIcon} />
        <StyledProfileTextWrapper>
          <StyledProfileName>Haru</StyledProfileName>
          <StyledProfileFullName>Haruki Atarashi</StyledProfileFullName>
        </StyledProfileTextWrapper>
      </StyledProfileWrapper>
      <StyledSkillsWrapper>
        <StyledSkillsTitle>スキル</StyledSkillsTitle>
        <Skills />
      </StyledSkillsWrapper>
    </StyledWrapper>
  );
};
export default HomePage;

const StyledWrapper = styled.div`
  background-color: ${MAIN_COLOR.WHITE_BLUE};
`;

const StyledProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const StyledProfileIcon = styled.img`
  width: 200px;
  ${phone`
    width: 80px;
  `}
`;

const StyledProfileTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

const StyledProfileName = styled.b`
  font-size: 30px;
  ${phone`
    font-size: 16px;
  `}
`;

const StyledProfileFullName = styled.span`
  ${phone`
    font-size: 8px;
  `}
`;

const StyledSkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 100px;
  ${phone`
    padding: 50px;
  `}
`;

const StyledSkillsTitle = styled.h3`
  position: absolute;
  top: 20px;
  left: 20%;
  font-size: 30px;
  ${phone`
      font-size: 20px;
  `}
`;
