import { MAIN_COLOR } from "../../valiables/Color";
import React, { useState } from "react";
import styled from "styled-components";
import { GithubIcon, InstaIcon, MailIcon, TwitterIcon } from "./SNSIcons";
import ProfileIcon from "../../assets/profile.jpg";

const SNSShowButton: React.FC = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <StyledButton onClick={() => setIsShow(!isShow)}>
        <StyledProfileIcon className="profile-icon">
          <StyledImg src={ProfileIcon} />
        </StyledProfileIcon>
      </StyledButton>
      <StyledIcon index={1} isShow={isShow}>
        <TwitterIcon />
      </StyledIcon>
      <StyledIcon index={2} isShow={isShow}>
        <InstaIcon />
      </StyledIcon>
      <StyledIcon index={3} isShow={isShow}>
        <GithubIcon />
      </StyledIcon>
      <StyledIcon index={4} isShow={isShow}>
        <MailIcon />
      </StyledIcon>
    </>
  );
};
export default SNSShowButton;

const StyledButton = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
`;

const StyledProfileIcon = styled.div`
  width: 70px;
  padding: 10px;
  box-sizing: border-box;
  transition: 0.5s;
`;

const StyledImg = styled.img`
  border-radius: 50%;
  border: 4px solid ${MAIN_COLOR.NOMAL_BLUE};
  width: 100%;
`;

const StyledIcon = styled.span<{ index: number; isShow: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  opacity: 0;
  transition: 0.5s;
  z-index: 5;
  ${(props) =>
    props.isShow &&
    `
    transition-delay: calc(0.1s * ${props.index});
    transform: translateX(-80px) translateY(calc(50px * ${
      props.index - 1
    })) translateY(20px);
    opacity: 1;
  `}
`;
