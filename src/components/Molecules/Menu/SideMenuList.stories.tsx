import React from "react";
import SideMenuList from "./SideMenuList";

export default {
  component: SideMenuList,
  title: "Molecules/SideMenuList",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Basic = () => {
  return <SideMenuList />;
};
