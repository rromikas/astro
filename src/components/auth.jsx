import React from "react";
import { useLocation } from "react-router-dom";
import { login } from "../auth/auth";
import history from "../routing/history";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Auth = () => {
  let query = useQuery();
  let code = query.get("code");
  let token = query.get("token");
  console.log("code: ", code);
  console.log("token: ", token);
  login(code);
  history.push({ pathname: "/" });
  return <div></div>;
};

export default Auth;
