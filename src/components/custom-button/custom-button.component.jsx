import React from "react";

import { StyledButton } from "./custom-button.styles";

const CustomButton = ({ children, ...otherProps }) => {
  return (
      <StyledButton {...otherProps}>{children}</StyledButton>
  );
};

export default CustomButton;
