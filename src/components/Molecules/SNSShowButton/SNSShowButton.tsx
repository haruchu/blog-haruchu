import React, { useState } from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import styled from "styled-components";
import { GithubIcon, InstaIcon, MailIcon, TwitterIcon } from "./SNSIcons";

const SideMenu: React.FC = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <button onClick={() => setIsShow(!isShow)}>
        クリック
      </button>
      <StyledIcon index={1} isShow={isShow}><TwitterIcon/></StyledIcon>
      <StyledIcon index={2} isShow={isShow}><InstaIcon/></StyledIcon>
      <StyledIcon index={3} isShow={isShow}><GithubIcon/></StyledIcon>
      <StyledIcon index={4} isShow={isShow}><MailIcon/></StyledIcon>
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
