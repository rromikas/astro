import React from "react";
import Logo from "./logo";
import { connect, useDispatch } from "react-redux";

const Navbar = (props) => {
  const dispatch = useDispatch();
  console.log("Navbar atejo props", props);
  return (
    <div className="concave-1 container-fluid p-5 justify-content-between align-items-center">
      <div className="row no-gutters">
        <div className="col pr-2 pb-2">
          <Logo></Logo>
        </div>
        <div className="col-auto">
          <div className="row no-gutters">
            <div className="col-auto pl-2">
              {props.user.username !== "" ? (
                <div>Hi, {props.user.username}</div>
              ) : (
                ""
              )}
            </div>
            <div className="col-auto pl-2">
              <div
                className="convex-1 p-3"
                style={{ fontFamily: "League Spartan" }}
                onClick={() => {
                  window.open(
                    "https://discordapp.com/oauth2/authorize?client_id=683749582705786882&scope=bot&permissions=2146958591"
                  );
                }}
              >
                CONNECT
              </div>
            </div>
            <div className="col-auto pl-2">
              <div
                className="convex-1 p-3"
                style={{ fontFamily: "League Spartan" }}
              >
                COMMANDS
              </div>
            </div>
            <div className="col-auto pl-2">
              <div
                className="convex-1 p-3"
                style={{ fontFamily: "League Spartan" }}
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
                    window.open(
                      "https://discordapp.com/api/oauth2/authorize?client_id=687765988636229689&redirect_uri=https%3A%2F%2Fastrobot.netlify.com%2Fauth&response_type=code&scope=identify%20email"
                    );
                  }
                }}
              >
                {props.user.username !== "" ? "LOGOUT" : "LOGIN"}
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
