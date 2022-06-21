import React from "react";
import SkillCircle from "./SkillCircle";
import HTMLImg from "./../../assets/HTML.png";

export default {
  component: SkillCircle,
  title: "Atoms/SkillCircle",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Basic = () => {
  return (
    <SkillCircle StudyImg={HTMLImg} StudyName={"HTML"} Comprehension={4} />
  );
};
