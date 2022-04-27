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
  return <Contributions />;
};
