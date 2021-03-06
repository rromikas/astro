import React from "react";
import Logo from "./logo";
import { connect, useDispatch } from "react-redux";
import history from "../routing/history";
import { invite } from "../api/invitation";

const Navbar = (props) => {
  const menuClass =
    "col-12 col-md-auto pln text-right text-md-center pl-3 crs-pntr";
  const dispatch = useDispatch();
  return (
    <div className="container-fluid px-3 pt-3 justify-content-between align-items-center pb-0 mb-4 mb-md-0">
      <div className="row no-gutters justify-content-between">
        <div className="col-auto pr-2 pb-2">
          <Logo onClick={() => history.push("/")}></Logo>
        </div>
        <div className="col">
          <div className="row no-gutters justify-content-end">
            <div className={menuClass}>
              {props.user.username !== "" ? (
                <div>Hi, {props.user.username}</div>
              ) : (
                ""
              )}
            </div>
            <div
              className={menuClass}
              onClick={() => {
                history.push("/servers");
              }}
            >
              My servers
            </div>
            <div className={menuClass}>
              <div className="pln" onClick={() => invite(555)}>
                Connect
              </div>
            </div>
            <div className={menuClass}>
              <div className="pln" onClick={() => history.push("/commands")}>
                Commands
              </div>
            </div>
            <div className={menuClass}>
              <div
                className="pln"
                onClick={() => {
                  if (props.user.username !== "") {
                    dispatch({
                      type: "SET_USER",
                      user: {
                        username: "",
                        email: "",
                        avatar: "",
                        id: "",
                      },
                    });
                  } else {
                    window.location =
                      "https://discord.com/api/oauth2/authorize?client_id=687765988636229689&redirect_uri=https%3A%2F%2Fastrobot.netlify.com%2Fauth&response_type=code&scope=guilds%20identify%20guilds.join";
                  }
                }}
              >
                {props.user.username !== "" ? "Logout" : "Login"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state,
  };
}

export default connect(mapStateToProps)(Navbar);
