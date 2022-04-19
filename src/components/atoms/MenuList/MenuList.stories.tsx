import React from "react";
import Component from "./MenuList";
import { AiOutlineHome } from "react-icons/ai"

export default {
  component: "Molecules/MenuList",
  title: "MenuList",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const isOpen = () => {
  return <Component icon={<AiOutlineHome />} listName={"Home"} isOpen={ true } />;
};

export const isClose = () => {
  return <Component icon={<AiOutlineHome />} listName={"Home"} isOpen={ false } />;
};
