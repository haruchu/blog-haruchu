import SideMenuList from "../../atoms/MenuList/SideMenuList";
import React, { useState } from "react";
import { Menu } from "./Menu";
import styled, { css } from "styled-components";
import ProfileIcon from "../../assets/profile.jpg";
import { MAIN_COLOR } from "../../valiables/Color";
import {
  GithubIcon,
  InstaIcon,
  MailIcon,
  TwitterIcon,
} from "../SNSShowButton/SNSIcons";

const SideMenu: React.FC = () => {
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
        <StyledProfileName className="profile-name">
          Haruki Atarashi
        </StyledProfileName>
        <StyledSNSIcons className="sns-icons">
          <TwitterIcon />
          <InstaIcon />
          <GithubIcon />
          <MailIcon />
        </StyledSNSIcons>
      </StyledInfo>
      <StyledMenuLists>
        {Menu.map(({name, path, icon}, index) => (
          <SideMenuList listName={name} path={path} key={index} isOpen={isOpen}>
            {icon}
          </SideMenuList>
        ))}
      </StyledMenuLists>
    </StyledSideMenu>
  );
};
export default SideMenu;

const StyledSideMenu = styled.div<{ isOpen: boolean }>`
  width: 70px;
  height: 100vh;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${MAIN_COLOR.NOMAL_BLUE};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
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
  display: flex;
  justify-content: center;
`;

const StyledImg = styled.img`
  border-radius: 50%;
  border: 4px solid ${MAIN_COLOR.LIGHT_BLUE};
  width: 100%;
`;

const StyledProfileName = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  opacity: 0;
  transition: 0.1s;
`;

const StyledSNSIcons = styled.div`
  opacity: 0;
  transition: 0.1s;
  margin: 20px;
  display: flex;
`;

const StyledMenuLists = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
`;
