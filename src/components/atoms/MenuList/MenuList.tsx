import { MAIN_COLOR } from "../../valiables/Color";
import React, { ReactNode } from "react";
import styled from "styled-components";

export interface MenuListProps {
  children: ReactNode;
  listName: string;
  isOpen: boolean;
}

const MenuList: React.FC<MenuListProps> = ({ children, listName, isOpen }) => {
  return (
    <StyledMenuList>
      <StyledLink>
        {children}
        <StyledListName isOpen={isOpen}>{listName}</StyledListName>
      </StyledLink>
    </StyledMenuList>
  );
};
export default MenuList;

const StyledMenuList = styled.li`
  list-style: none;

  transition: 0.2s;
  background-color: ${MAIN_COLOR.DARK_BLUE};
  &:hover {
    background-color: ${MAIN_COLOR.NOMAL_BLUE};
  }
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  padding: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 800;
  box-sizing: border-box;
  svg {
    min-width: 24px;
    font-size: 24px;
  }
`;

const StyledListName = styled.span<{ isOpen: boolean }>`
  overflow: hidden;
  transition: 1s;
  ${(props) =>
    props.isOpen ? `margin-left: 16px; opacity: 1;` : `width: 0; opacity: 0;`}
`;
