import React from "react";
import EditButton from "./EditButton";

export default {
  component: EditButton,
  title: "Atoms/EditButton",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Basic = () => {
  return <EditButton onClick={() => console.log("clicked")} />;
};
