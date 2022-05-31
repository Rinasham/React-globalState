import React from "react";
import { users } from "../users";
import { User } from "./User";
import { useLocation } from "react-router-dom";

export const Main = () => {
  const location = useLocation();

  return (
    <div>
      <h1>test</h1>
      {users.map((user) => (
        <User
          key={user.name}
          name={user.name}
          country={user.country}
          img={user.img}
          /**
          contextでグローバルにisAdminのstateを書き換え、参照できるようになったので以下は不要。
           */
          // isAdmin={location.state.isAdmin}
        />
      ))}
    </div>
  );
};
