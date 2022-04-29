import { MAIN_COLOR } from "../../valiables/Color";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { phone } from "../../valiables/BreakPoint";

type onEditCompleteType = (something: string) => void;

interface InputProps {
  defaultValue: string;
  onEditComplete: onEditCompleteType;
}

const Input: React.FC<InputProps> = ({ defaultValue = "", onEditComplete }) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const InputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    InputRef.current.value = defaultValue;

    const onFocusOut = () => onEditComplete(InputRef.current.value);

    InputRef.current.addEventListener("focusout", onFocusOut);
    InputRef.current.addEventListener("keypress", (event) => {
      if (event.key !== "Enter") return;
      InputRef.current.removeEventListener("focusout", onFocusOut);
      onEditComplete(InputRef.current.value);
    });
  }, []);

  return <StyledInput ref={InputRef} />;
};
export default Input;

const StyledInput = styled.input`
  outline: none;
  border: none;
  color: #000;
  font-size: 30px;
  line-height: 20px;
  width: 100%;
  border-radius: 2px;
  padding: 10px;
  transition: 0.5s;
  background-color: ${MAIN_COLOR.WHITE_BLUE};
  &:focus {
    background-color: ${MAIN_COLOR.LIGHT_BLUE};
  }
  ${phone`
    font-size: 20px;
  `}
`;
