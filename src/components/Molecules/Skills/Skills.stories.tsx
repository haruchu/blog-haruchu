import React from "react";
import Skills from "./Skills";

export default {
  component: Skills,
  title: "Molecules/Skills",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Basic = () => {
  return <Skills />;
};
