import MenuList from "../../atoms/MenuList/MenuList";
import React, { useState } from "react";
import { Menu } from "./Menu";
import styled, { css } from "styled-components";
import ProfileIcon from "../../assets/profile.jpg";
import { MAIN_COLOR } from "../../valiables/Color";
import { AiFillGithub, AiOutlineTwitter, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";

const SideMenuList: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

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
          <StyledTwitterIcon><AiOutlineTwitter/></StyledTwitterIcon>
          <StyledInstaIcon><AiOutlineInstagram className="icon"/></StyledInstaIcon>
          <StyledGithubIcon><AiFillGithub/></StyledGithubIcon>
          <StyledMailIcon>< AiOutlineMail/></StyledMailIcon>
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
  transition: 0.1s;
`;

const StyledSNSIcons = styled.div`
  opacity: 0;
  transition: 0.1s;
  margin: 20px;
  display: flex;
`;

const StyledIconWrapper = css`
  width: 30px;
  height: 30px;
  padding: 6px;
  margin-left: 10px;
  font-size: 28px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: .5s;
  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

const StyledTwitterIcon = styled.a`
  ${StyledIconWrapper};
  color: white;
  background-color: rgb(29, 155, 240);
`

const StyledInstaIcon = styled.a`
  ${StyledIconWrapper};
  color: #fff;
  background: -webkit-linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat;
  background: linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat;
  overflow: hidden;
  position: relative;
  .icon{
    z-index: 2;
  }
  &::before {
    content: '';
    position: absolute;
    top: 12px;
    left: -9px;
    width: 30px;
    height: 30px;
    background: -webkit-radial-gradient(#ffdb2c 10%, rgba(255, 105, 34, 0.65) 55%, rgba(255, 88, 96, 0) 70%);
    background: radial-gradient(#ffdb2c 10%, rgba(255, 105, 34, 0.65) 55%, rgba(255, 88, 96, 0) 70%);
  }
`

const StyledGithubIcon = styled.a`
  ${StyledIconWrapper};
  color: #fff;
  background-color: #000;
`

const StyledMailIcon = styled.a`
${StyledIconWrapper};
  color: #000;
  background-color: #fff;
`

const StyledMenuLists = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
`;
