import React from "react";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import styled, { css } from "styled-components";

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
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

const StyledTwitterIcon = styled.a`
  ${StyledIconWrapper};
  color: white;
  background-color: rgb(29, 155, 240);
`;

export const TwitterIcon: React.FC = () => (
  <StyledTwitterIcon href="https://twitter.com/Turtwig618">
    <AiOutlineTwitter />
  </StyledTwitterIcon>
);

const StyledInstaIcon = styled.a`
  ${StyledIconWrapper};
  color: #fff;
  background: -webkit-linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat;
  background: linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat;
  overflow: hidden;
  position: relative;
  .icon {
    z-index: 2;
  }
  &::before {
    content: "";
    position: absolute;
    top: 12px;
    left: -9px;
    width: 30px;
    height: 30px;
    background: -webkit-radial-gradient(
      #ffdb2c 10%,
      rgba(255, 105, 34, 0.65) 55%,
      rgba(255, 88, 96, 0) 70%
    );
    background: radial-gradient(
      #ffdb2c 10%,
      rgba(255, 105, 34, 0.65) 55%,
      rgba(255, 88, 96, 0) 70%
    );
  }
`;

export const InstaIcon: React.FC = () => (
  <StyledInstaIcon href="https://www.instagram.com/nhp_haru/">
    <AiOutlineInstagram className="icon" />
  </StyledInstaIcon>
);

const StyledGithubIcon = styled.a`
  ${StyledIconWrapper};
  color: #fff;
  background-color: #000;
`;

export const GithubIcon: React.FC = () => (
  <StyledGithubIcon href="https://github.com/haruchu">
    <AiFillGithub />
  </StyledGithubIcon>
);

const StyledMailIcon = styled.a`
  ${StyledIconWrapper};
  color: #000;
  background-color: #fff;
`;

export const MailIcon: React.FC = () => (
  <StyledMailIcon href="mailto:haruki.0618.biz@gmail.com">
    <AiOutlineMail />
  </StyledMailIcon>
);
