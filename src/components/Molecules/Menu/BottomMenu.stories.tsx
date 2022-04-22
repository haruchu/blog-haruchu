import React from "react";
import BottomMenu from "./BottomMenu";

export default {
  component: BottomMenu,
  title: "Molecules/BottomMenu",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Basic = () => {
  return <BottomMenu />;
};
