import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../providers/UserProvider";

export const User = (props) => {
  const { name, country, img } = props;

  const { userInfo } = useContext(UserContext);

  return (
    <SDiv>
      <h2>{name}</h2>
      {userInfo.isAdmin && <SEdit>Edit</SEdit>}
      <p>{country}</p>
      <img src={img}></img>
    </SDiv>
  );
};

const SDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 2px solid grey;
  border-radius: 10px;
  margin: 10px;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
