import React from "react";
import Input from "./Input";

export default {
  component: Input,
  title: "Atoms/Input",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Basic = () => {
  return <Input defaultValue={""} onEditComplete={(value) => console.log(value)} />;
};