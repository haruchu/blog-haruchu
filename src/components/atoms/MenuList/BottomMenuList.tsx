import React, { ReactNode } from "react";
import styled from "styled-components";

export interface MenuListProps {
  listName: string;
  path: string;
  children: ReactNode;
  index: number;
  openIndex: number;
  onActive: React.MouseEventHandler<HTMLLIElement>;
}

const BottomMenuList: React.FC<MenuListProps> = ({
  listName,
  path,
  children,
  index,
  openIndex,
  onActive,
}) => {
  return (
    <StyledList
      index={index}
      isOpen={index == openIndex ? true : false}
      onClick={onActive}
    >
      <StyledLink href={path}>
        <StyledIcon className="icon">{children}</StyledIcon>
        <StyledText className="text">{listName}</StyledText>
      </StyledLink>
    </StyledList>
  );
};
export default BottomMenuList;

const StyledList = styled.li<{ index: number; isOpen: boolean }>`
  list-style: none;
  width: 70px;
  height: 70px;
  z-index: 1;

  ${(props) =>
    props.isOpen &&
    `
      & a .icon {
        transform: translateY(-35px);
      }

      & a .text {
        opacity: 1;
        transform: translateY(10px);
      }

      & ~ .indicator
      {
        transform: translateX(calc(70px * ${props.index}));
      }
    `}
`;

const StyledLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500;
`;

const StyledIcon = styled.span`
  display: block;
  line-height: 75px;
  font-size: 28px;
  text-align: center;
  transition: 0.5s;
  color: black;
`;

const StyledText = styled.span`
  position: absolute;
  color: black;
  font-weight: 400;
  font-size: 16px;
  transition: 0.5s;
  opacity: 0;
  transform: translateY(20px);
`;
