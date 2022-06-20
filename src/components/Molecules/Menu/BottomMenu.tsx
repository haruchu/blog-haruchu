import React from "react";
import { Menu } from "./Menu";
import styled from "styled-components";
import BottomMenuList from "../../atoms/MenuList/BottomMenuList";
import { MAIN_COLOR } from "../../valiables/Color";
import { useLocation } from "react-router-dom";

const BottomMenu: React.FC = () => {
  let openIndex = 0;
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  console.log(pathname.indexOf("article"));
  if (pathname == "") {
    openIndex = 0;
  } else if (
    pathname == "articles" ||
    location.pathname.split("/")[2] == "articles" ||
    pathname == "article" ||
    location.pathname.split("/")[2] == "article"
  ) {
    openIndex = 1;
  } else {
    openIndex = 2;
  }

  return (
    <StyledMenu>
      <StyledLists>
        {Menu.map(({ name, icon, path }, index) => {
          return (
            <BottomMenuList
              key={index}
              listName={name}
              path={path}
              index={index}
              openIndex={openIndex}
            >
              {icon}
            </BottomMenuList>
          );
        })}
        <StyledIndicator className="indicator" />
      </StyledLists>
    </StyledMenu>
  );
};
export default BottomMenu;

const StyledMenu = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${MAIN_COLOR.LIGHT_BLUE};
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 10px;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  border-top: 10px solid ${MAIN_COLOR.WHITE_BLUE};
`;

const StyledLists = styled.ul`
  position: relative;
  display: flex;
  padding: 0 10px;
  margin: 0;
`;

const StyledIndicator = styled.div`
  margin: 0;
  position: absolute;
  top: -50%;
  width: 70px;
  height: 70px;
  background-color: ${MAIN_COLOR.NOMAL_BLUE};
  border-radius: 50%;
  border: solid 6px ${MAIN_COLOR.WHITE_BLUE};
  box-sizing: border-box;
  transition: 0.5s;

  &::before {
    content: "";
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: -22px;
    width: 20px;
    height: 20px;
    border-top-right-radius: 20px;
    box-shadow: 0px -10px ${MAIN_COLOR.WHITE_BLUE};
  }

  &::after {
    content: "";
    background-color: transparent;
    position: absolute;
    top: 50%;
    right: -22px;
    width: 20px;
    height: 20px;
    border-top-left-radius: 20px;
    box-shadow: 0px -10px ${MAIN_COLOR.WHITE_BLUE};
  }
`;
