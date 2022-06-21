import React from "react";
import styled from "styled-components";
import { SkillLists } from "./SkillLists";
import SkillCircle from "../../atoms/SkillCircle/SkillCircle";

const Skills: React.FC = () => {
  return (
    <StyledSkills>
      {SkillLists.map((skill, index) => (
        <SkillCircle
          key={index}
          StudyImg={skill.StudyImg}
          Comprehension={skill.Comprehension}
        />
      ))}
    </StyledSkills>
  );
};
export default Skills;

const StyledSkills = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
`;
