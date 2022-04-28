import React from "react";
import Contributions from "./Contributions";

export default {
  component: Contributions,
  title: "Molecules/Contributions",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Basic = () => {
  const contributions = [
    { date: "2022-07-03", totalTime: 9.2 },
    { date: "2022-08-22", totalTime: 2.4 },
    { date: "2022-07-29", totalTime: 4.6 },
    { date: "2022-10-01", totalTime: 1 },
    { date: "2022-10-03", totalTime: 2.7 },
    { date: "2022-10-06", totalTime: 3.9 },
    { date: "2022-10-10", totalTime: 4.2 },
    { date: "2022-10-07", totalTime: 6.1 },
    { date: "2022-09-15", totalTime: 3.7 },
  ];
  return <Contributions contributions={contributions} />;
};
