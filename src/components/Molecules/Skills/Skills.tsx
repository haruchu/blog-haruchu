import React from "react";
import styled from "styled-components";
import { SkillLists } from "./SkillLists";
import Skill from "../../atoms/Skill/Skill";

const Skills: React.FC = () => {
  return (
    <StyledSkills>
      {SkillLists.map((skill, index) => (
        <Skill
          key={index}
          StudyImg={skill.StudyImg}
          StudyName={skill.StudyName}
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
