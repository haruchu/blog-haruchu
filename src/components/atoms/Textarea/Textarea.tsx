import { MAIN_COLOR } from "../../valiables/Color";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { phone } from "../../valiables/BreakPoint";

type onEditCompleteType = (something: string) => void;

interface TextareaProps {
  defaultValue: string;
  onEditComplete: onEditCompleteType;
}

const Textarea: React.FC<TextareaProps> = ({
  defaultValue = "",
  onEditComplete,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const TextareaRef = useRef<HTMLTextAreaElement>(null!);

  useEffect(() => {
    TextareaRef.current.value = defaultValue;

    const onFocusOut = () => onEditComplete(TextareaRef.current.value);

    TextareaRef.current.addEventListener("focusout", onFocusOut);
    TextareaRef.current.addEventListener("keypress", (event) => {
      if (event.key !== "Enter") return;
      TextareaRef.current.removeEventListener("focusout", onFocusOut);
      onEditComplete(TextareaRef.current.value);
    });
  }, []);

  return (
    <StyledTextarea
      ref={TextareaRef}
      style={{ resize: "none", boxSizing: "border-box" }}
    />
  );
};
export default Textarea;

const StyledTextarea = styled.textarea`
  width: 90%;
  height: 400px;
  transition: 0.5s;
  padding: 10px;
  border: none;
  font-size: 16px;
  background-color: ${MAIN_COLOR.WHITE_BLUE};
  &:focus {
    outline: none;
    background-color: ${MAIN_COLOR.LIGHT_BLUE};
  }
  ${phone`
    font-size: 12px;
  `}
`;
