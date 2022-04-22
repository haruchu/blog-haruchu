import React from "react";
import SideMenuList from "./SideMenuList";
import { AiOutlineHome } from "react-icons/ai";

export default {
  component: SideMenuList,
  title: "Atoms/MenuList",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const isOpen = () => {
  return (
    <SideMenuList listName={"Home"} isOpen={true}>
      <AiOutlineHome />
    </SideMenuList>
  );
};

export const isClose = () => {
  return (
    <SideMenuList listName={"Home"} isOpen={false}>
      <AiOutlineHome />
    </SideMenuList>
  );
};
