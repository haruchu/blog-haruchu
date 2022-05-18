import { MAIN_COLOR } from "../../valiables/Color";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { phone } from "../../valiables/BreakPoint";
import { AiOutlinePlus } from "react-icons/ai";

type onEditCompleteType = (something: string) => void;

interface AddTagInputProps {
  onEditComplete: onEditCompleteType;
}

const AddTagInput: React.FC<AddTagInputProps> = ({ onEditComplete }) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const InputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    InputRef.current.value = "";

    InputRef.current.addEventListener("keypress", (event) => {
      if (event.key !== "Enter") return;
      onEditComplete(InputRef.current.value);
    });
  }, []);

  return <StyledInput ref={InputRef} placeholder="追加" />;
};
export default AddTagInput;

const StyledInput = styled.input`
  outline: none;
  border: none;
  color: #000;
  font-size: 16px;
  line-height: 35px;
  width: 40px;
  border-radius: 20px;
  padding: 4px;
  transition: 0.5s;
  background-color: ${MAIN_COLOR.WHITE_BLUE};
  text-align: center;
  &:focus {
    background-color: ${MAIN_COLOR.LIGHT_BLUE};
    width: auto;
    text-align: start;
  }
  &:hover {
    background-color: ${MAIN_COLOR.LIGHT_BLUE};
  }
  ${phone`
    font-size: 20px;
  `}
`;
