import React from "react";
import AddTagInput from "./AddTagInput";

export default {
  component: AddTagInput,
  title: "Atoms/AddTagInput",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Basic = () => {
  return <AddTagInput onEditComplete={(value) => console.log(value)} />;
};
