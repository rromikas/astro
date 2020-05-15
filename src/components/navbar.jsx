import React from "react";
import Logo from "./logo";
import { connect, useDispatch } from "react-redux";

const Navbar = (props) => {
  const menuClass =
    "col-12 col-md-auto pln text-right text-md-center pl-3 crs-pntr";
  const dispatch = useDispatch();
  return (
    <div className="container-fluid px-3 pt-3 justify-content-between align-items-center pb-0">
      <div className="row no-gutters justify-content-between">
        <div className="col-auto pr-2 pb-2">
          <Logo></Logo>
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
            <div className={menuClass}>
              <div
                className="pln"
                onClick={() => {
                  window.location =
                    "https://discordapp.com/oauth2/authorize?client_id=683749582705786882&scope=bot&permissions=2146958591";
                }}
              >
                Connect
              </div>
            </div>
            <div className={menuClass}>
              <div className="pln">Commands</div>
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
                      "https://discordapp.com/api/oauth2/authorize?client_id=687765988636229689&redirect_uri=https%3A%2F%2Fastrobot.netlify.com%2Fauth&response_type=code&scope=identify%20email";
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
