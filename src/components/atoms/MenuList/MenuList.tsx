import { MAIN_COLOR } from "../../valiables/Color";
import React, { ReactNode } from "react";
import styled from 'styled-components';

export interface MenuListProps {
  icon: ReactNode,
  listName: string,
  isOpen: boolean
}

const MenuList: React.FC<MenuListProps> = ({ icon, listName, isOpen }) => {

  return (
    <StyledMenuList>
      <StyledLink>
        {icon}
        { isOpen ? <StyledListName>{ listName }</StyledListName> : <></>}
      </StyledLink>
    </StyledMenuList>
  );
};
export default MenuList;

const StyledMenuList = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: 0.2s;
  background-color: ${MAIN_COLOR.DARK_BLUE};
  &:hover {
    background-color: ${MAIN_COLOR.NOMAL_BLUE};
  }
`

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 40px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 800;
  svg {
    font-size: 24px;
  }
`

const StyledListName = styled.span`
  margin-left: 8px;
`


