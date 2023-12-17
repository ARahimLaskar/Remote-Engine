import React from "react";
import { useSelector } from "react-redux";

import { failComp } from "../component/alertMsg";

export const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state);

  const isLogin = user.token;

  if (!isLogin) {
    failComp("Please Login to continue..");
  } else {
    return children;
  }
};
