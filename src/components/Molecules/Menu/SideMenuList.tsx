import MenuList from "../../atoms/MenuList/MenuList";
import React, { useState } from "react";
import { Menu } from "./Menu";
import styled from "styled-components";
import ProfileIcon from "../../assets/profile.jpg";

const SideMenuList: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledSideMenu
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <StyledInfo>
        <StyledProfileIcon>
          <StyledImg src={ProfileIcon} />
        </StyledProfileIcon>
        <StyledSNSIcons></StyledSNSIcons>
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

const StyledSideMenu = styled.div`
  width: 70px;
  transition: 0.5s;

  &:hover {
    width: 300px;
  }
`;

const StyledInfo = styled.div`
  width: 100%;
`;

const StyledProfileIcon = styled.div``;

const StyledImg = styled.img``;

const StyledSNSIcons = styled.div``;

const StyledMenuLists = styled.ul`
  width: 100%;
`;
