import React from "react";
import Component from "./Circle";

export default {
  component: "Molecules/Circle",
  title: "Circle",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Basic = () => {
  const studyTimes = [
    {
      name: "HTML",
      time: 30
    },
    {
      name: "CSS",
      time: 40
    },
    {
      name: "Javascript",
      time: 60
    }
  ]
  return <Component studyTimes={ studyTimes } />;
};
