import React, { useContext } from "react";
import { Button } from "./Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

export const Home = () => {
  const navigation = useNavigate();
  const { userInfo, setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    /**
     * contextでグローバル変数を使えるようになったので、propsでisAdmin情報を渡さなくてもよくなった。
     * その書きかえが以下　↓
     */
    navigation("/main");
    // navigation("/main", { state: { isAdmin: true } });
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigation("/main");
    // navigation("/main", { state: { isAdmin: false } });
  };

  return (
    <SHomeDiv>
      <h1>Home</h1>
      <Button navigation={onClickAdmin}>管理者</Button>
      <Button navigation={onClickGeneral}>一般ユーザー</Button>
    </SHomeDiv>
  );
};

const SHomeDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
