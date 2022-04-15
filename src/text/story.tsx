import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Example",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Basic = () => {
  return <Component />;
};
