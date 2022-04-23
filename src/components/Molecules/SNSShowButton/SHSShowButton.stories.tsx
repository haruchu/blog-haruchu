import React from "react";
import SNSShowButton from "./SNSShowButton";

export default {
  component: SNSShowButton,
  title: "Molecules/SNSShowButton",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Basic = () => {
  return <SNSShowButton />;
};
