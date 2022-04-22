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
  const onActive = () => {
    console.log("Active");
  };

  return (
    <BottomMenuList
      listName={"Home"}
      index={1}
      openIndex={1}
      onActive={onActive}
    >
      <AiOutlineHome />
    </BottomMenuList>
  );
};

export const notActive = () => {
  const onActive = () => {
    console.log("Active");
  };

  return (
    <BottomMenuList
      listName={"Home"}
      index={1}
      openIndex={2}
      onActive={onActive}
    >
      <AiOutlineHome />
    </BottomMenuList>
  );
};
