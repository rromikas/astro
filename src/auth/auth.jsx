import React from "react";
import { useLocation } from "react-router-dom";
import { login } from "./auth";
import history from "../routing/history";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Auth = () => {
  let query = useQuery();
  let code = query.get("code");
  console.log("code: ", code);
  login(code);
  history.push({ pathname: "/" });
  return <div></div>;
};

export default Auth;
