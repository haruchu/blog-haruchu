import MenuList from "../../atoms/MenuList/MenuList";
import React, { useState } from "react";
import { Menu } from "./Menu";
import styled, { createGlobalStyle, css } from "styled-components";
import ProfileIcon from "../../assets/profile.jpg";
import { MAIN_COLOR } from "../../valiables/Color";

const SideMenuList: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledSideMenu
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      isOpen={isOpen}
    >
      <StyledInfo>
        <StyledProfileIcon className="profile-icon">
          <StyledImg src={ProfileIcon} />
        </StyledProfileIcon>
        <StyledProfileName className="profile-name">Haruki Atarashi</StyledProfileName>
        <StyledSNSIcons className="sns-icons">
          <ExampleIcon>a</ExampleIcon>
          <ExampleIcon>b</ExampleIcon>
          <ExampleIcon>c</ExampleIcon>
          <ExampleIcon>d</ExampleIcon>
        </StyledSNSIcons>
      </StyledInfo>
      <StyledMenuLists>
        {Menu.map((item, index) => (
          <MenuList listName={item.name} key={index} isOpen={isOpen}>
            {item.icon}
          </MenuList>
        ))}
      </StyledMenuLists>
    </StyledSideMenu>
  );
};
export default SideMenuList;

const StyledSideMenu = styled.div<{ isOpen: boolean }>`
  width: 70px;
  height: 100vh;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${MAIN_COLOR.DARK_BLUE};
  ${(props) =>
    props.isOpen &&
    css`
      width: 300px;
      .profile-icon {
        width: 200px;
      }
      .profile-name,
      .sns-icons {
        opacity: 1;
      }
    `}
`;

const StyledInfo = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledProfileIcon = styled.div`
  width: 50px;
  padding: 10px;
  box-sizing: border-box;
  transition: 0.5s;
`;

const StyledImg = styled.img`
  border-radius: 50%;
  border: 2px solid ${MAIN_COLOR.LIGHT_BLUE};
  width: 100%;
`;

const StyledProfileName = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  opacity: 0;
  transition: .5s;
`;

const StyledSNSIcons = styled.div`
  opacity: 0;
  transition: 0.5s;
  margin: 10px;
`;

const ExampleIcon = styled.span`
  background-color: green;
  width: 20px;
`;

const StyledMenuLists = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
`;
