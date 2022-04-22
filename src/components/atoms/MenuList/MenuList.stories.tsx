import React from "react";
import MenuList from "./SideMenuList";
import { AiOutlineHome } from "react-icons/ai";

export default {
  component: MenuList,
  title: "Atoms/MenuList",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const isOpen = () => {
  return (
    <MenuList listName={"Home"} isOpen={true}>
      <AiOutlineHome />
    </MenuList>
  );
};

export const isClose = () => {
  return (
    <MenuList listName={"Home"} isOpen={false}>
      <AiOutlineHome />
    </MenuList>
  );
};
