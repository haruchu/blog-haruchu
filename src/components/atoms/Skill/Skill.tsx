import { MAIN_COLOR } from "../../valiables/Color";
import React from "react";
import styled from "styled-components";
import { phone } from "../../valiables/BreakPoint";

interface SkillProps {
  StudyImg: string;
  StudyName: string;
  Comprehension: number;
}

const ReturnComprehensionText = (Comprehension: number) => {
  if (Comprehension == 5) {
    return "かんぺき";
  }
  else if (Comprehension >= 4) {
    return "けっこう わかる";
  }
  else if (Comprehension >= 3) {
    return "まぁまぁ わかる";
  }
  else if (Comprehension >= 2) {
    return "触れたことあるくらい";
  }
  else if (Comprehension >= 1) {
    return "わからないところが多い";
  }
  else {
    return "わからない";
  }
}

const Skill: React.FC<SkillProps> = ({ StudyImg, StudyName, Comprehension }) => {

  return (
    <StyledWrapper>
      <StyledStudyImg src={ StudyImg } />
      <StyledDetail>
        <StyledStudyName>
          { StudyName }
        </StyledStudyName>
        <StyledStudyGauge max={100} low={30} high={80} optimum={100} value={Comprehension * 20} />
        <StyledComprehensionText>{ ReturnComprehensionText(Comprehension) }</StyledComprehensionText>
      </StyledDetail>
    </StyledWrapper>

  );
};
export default Skill;

const StyledWrapper = styled.div`
  background-color: ${MAIN_COLOR.LIGHT_BLUE};
  width: 400px;
  margin: 20px;
  padding: 30px;
  display: flex;
  border-radius: 20px;
  ${phone`
    width: 200px;
    padding: 10px;
    margin: 10px;
  `}
`

const StyledStudyImg = styled.img`
  width: 100px;
  border-radius: 20px;
  object-fit: cover;
  border: 10px solid transparent;
  ${phone`
    width: 50px;
  `}
`

const StyledDetail = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  ${phone`
    margin-left: 20px;
  `}
`

const StyledStudyName = styled.span`
  font-weight: 800;
  margin-bottom: 10px;
  ${phone`
    font-size: 8px;
  `}
`

const StyledStudyGauge = styled.meter`
  width: 200px;
  height: 30px;
  ${phone`
    width: 100px;
    height: 16px;
  `}
  &::-webkit-meter-optimum-value{
    background-color: #6BCB77;
  }
  &::-webkit-meter-suboptimum-value{
    background-color: #FFD93D;
  }
  &::-webkit-meter-even-less-good-value{
    background-color: #FF6B6B;
  }
`

const StyledComprehensionText = styled.text`
  ${phone`
    font-size: 8px;
  `}
`