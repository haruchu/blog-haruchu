import React from "react";
import BottomMenuList from "./BottomMenuList";
import { AiOutlineHome } from "react-icons/ai";

export default {
  component: BottomMenuList,
  title: "Atoms/BottomMenuList",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const isActive = () => {

  return (
    <BottomMenuList
      listName={"Home"}
      path="/"
      index={1}
      openIndex={1}
    >
      <AiOutlineHome />
    </BottomMenuList>
  );
};

export const notActive = () => {

  return (
    <BottomMenuList
      listName={"Home"}
      path="/"
      index={1}
      openIndex={2}
    >
      <AiOutlineHome />
    </BottomMenuList>
  );
};
