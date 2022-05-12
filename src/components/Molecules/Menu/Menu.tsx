import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineArticle } from "react-icons/md";
import { BsCalendarWeek } from "react-icons/bs";

export const Menu = [
  {
    name: "Home",
    icon: <AiOutlineHome />,
    path: "/"
  },
  {
    name: "Articles",
    icon: <MdOutlineArticle />,
    path: "/articles"
  },
  {
    name: "Contributions",
    icon: <BsCalendarWeek />,
    path: "/contributions"
  },
];
