import { MAIN_COLOR } from "../../valiables/Color";
import React from "react";
import styled from "styled-components";
import { BsFillPencilFill } from "react-icons/bs";
import { phone } from "../../valiables/BreakPoint";

interface EditButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const EditButton: React.FC<EditButtonProps> = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <BsFillPencilFill />
    </StyledButton>
  );
};
export default EditButton;

const StyledButton = styled.button`
  background-color: ${MAIN_COLOR.DARK_BLUE};
  border: none;
  padding: 4px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  transition: 0.5s;
  &:hover {
    opacity: 0.7;
  }

  ${phone`
      width: 30px;
      height: 30px;
      font-size: 8px;
  `}
`;
