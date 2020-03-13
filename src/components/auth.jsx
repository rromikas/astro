import React from "react";
import { useLocation } from "react-router-dom";
import { login } from "../auth/auth";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Auth = () => {
  let query = useQuery();
  let code = query.get("code");
  login(code);
  return <div></div>;
};

export default Auth;
