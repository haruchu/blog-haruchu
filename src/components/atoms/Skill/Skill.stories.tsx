import React from "react";
import Skill from "./Skill";
import HTMLImg from "./../../assets/HTML.png";

export default {
  component: Skill,
  title: "Atoms/Skill",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Basic = () => {
  return <Skill StudyImg={HTMLImg} StudyName={"HTML"} Comprehension={4} />;
};
