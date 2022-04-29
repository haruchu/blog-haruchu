import React from "react";
import Textarea from "./Textarea";

export default {
  component: Textarea,
  title: "Atoms/Textarea",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Basic = () => {
  return (
    <Textarea
      defaultValue={""}
      onEditComplete={(value) => console.log(value)}
    />
  );
};
