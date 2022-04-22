import React, { useState } from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import styled from "styled-components";

const SideMenu: React.FC = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <button onClick={() => setIsShow(!isShow)}>
        クリック
      </button>
      <div>
          <StyledIcon index={1} isShow={isShow}>a</StyledIcon>
          <StyledIcon index={2} isShow={isShow}>a</StyledIcon>
          <StyledIcon index={3} isShow={isShow}>a</StyledIcon>
          <StyledIcon index={4} isShow={isShow}>a</StyledIcon>
      </div>
    </>
  );
};
export default SideMenu;

const StyledIcon = styled.span<{ index: number; isShow: boolean }>`
  position: absolute;
  right: 0;
  opacity: 0;
  transition: .5s;
  ${(props) => props.isShow && `
    transform: translateX(calc(-50px)) translateY(calc(50px * ${props.index - 1}));
    opacity: 1;
  `}
`
