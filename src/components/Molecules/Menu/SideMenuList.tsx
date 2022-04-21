import MenuList from "../../atoms/MenuList/MenuList";
import React, { useState } from "react";
import { Menu } from "./Menu";
import styled from "styled-components";

const SideMenuList: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <SideMenu onMouseOver={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <MenuLists>
        {
          Menu.map((item, index) => <MenuList listName={item.name} key = {index} isOpen={isOpen}>{ item.icon }</MenuList>)
        }
      </MenuLists>
    </SideMenu>
  );
};
export default SideMenuList;

const SideMenu = styled.div`
  width: 70px;
  transition: .5s;

  &:hover {
    width: 300px;
  }
`

const MenuLists = styled.ul`
  width: 100%;
`