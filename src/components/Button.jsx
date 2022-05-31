import React from "react";
import styled from "styled-components";

export const Button = (props) => {
  const { children, navigation } = props;
  return <SButton onClick={() => navigation("/main")}>{children}</SButton>;
};

const SButton = styled.button`
  border: none;
  border-radius: 9999px;
  padding: 10px;
  margin: 20px;
`;
