import React from "react";
import Logo from "./logo";
import { login, getUser } from "../auth/auth";
import { connect } from "react-redux";

const Navbar = props => {
  console.log("Navbar atejo props", props);
  return (
    <div className="navbar">
      <Logo></Logo>
      {props.user.username !== "" ? <div>Hi, {props.user.username}</div> : ""}
      <button className="outline-btn" onClick={login}>
        Login
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state
  };
}

export default connect(mapStateToProps)(Navbar);
