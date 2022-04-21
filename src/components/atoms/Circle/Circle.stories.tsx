import React from "react";
import Circle from "./Circle";

export default {
  component: Circle,
  title: "Atoms/Circle",
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
      time: 30,
    },
    {
      name: "CSS",
      time: 40,
    },
    {
      name: "Javascript",
      time: 60,
    },
  ];
  return <Circle studyTimes={studyTimes} />;
};
