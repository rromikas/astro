import React from "react";
import Logo from "./logo";
import { login, getUser } from "../auth/auth";
import { connect, useDispatch } from "react-redux";

const Navbar = props => {
  const dispatch = useDispatch();
  console.log("Navbar atejo props", props);
  return (
    <div className="navbar">
      <Logo></Logo>
      {props.user.username !== "" ? <div>Hi, {props.user.username}</div> : ""}
      <button
        className="outline-btn"
        onClick={() => {
          if (props.user.username !== "") {
            dispatch({
              type: "SET_USER",
              user: {
                username: "",
                email: "",
                avatar: "",
                id: ""
              }
            });
          } else {
            window.open(
              "https://discordapp.com/api/oauth2/authorize?client_id=687765988636229689&redirect_uri=https%3A%2F%2Fastrobot.netlify.com%2Fauth&response_type=code&scope=identify%20email"
            );
          }
        }}
      >
        {props.user.username !== "" ? "Logout" : "Login"}
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
