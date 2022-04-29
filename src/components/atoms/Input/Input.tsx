import { MAIN_COLOR } from "../../valiables/Color";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

type onEditCompleteType = (something: string) => void;

interface InputProps {
  defaultValue: string;
  onEditComplete: onEditCompleteType;
}

const Input: React.FC<InputProps> = ({ defaultValue = "", onEditComplete }) => {
  const InputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    InputRef.current.value = defaultValue;
    InputRef.current.focus();

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
  background-color: ${MAIN_COLOR.LIGHT_BLUE};
  font-size: 30px;
  line-height: 20px;
  width: 100%;
  border-radius: 2px;
  padding: 10px;
`;
