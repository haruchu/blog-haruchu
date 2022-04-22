import React from "react";
import SideMenu from "./SideMenu";

export default {
  component: SideMenu,
  title: "Molecules/SideMenu",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Basic = () => {
  return <SideMenu />;
};
