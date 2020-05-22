import React from "react";

const Navbar = ({ setMain, main, server }) => {
  return (
    <div className="row no-gutters">
      <div className="col-12 col-md p-1 mb-2" style={{ height: "60px" }}>
        <div className="row no-gutters justify-content-start h-100">
          <div
            className="h-100 convex-2"
            style={{
              borderRadius: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "380px",
              padding: "0 30px 0 20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                className="enbl-btn mr-2"
                style={{
                  width: "15px",
                  height: "15px",
                  marginRight: "10px",
                  borderRadius: "50%",
                }}
              ></div>
              {server}
            </div>
            <div>Dashboard</div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md">
        <div className="row no-gutters">
          <div className="col-3 p-1 mb-2" style={{ height: "60px" }}>
            <div
              className={`h-100 ${
                main === "server" ? " concave-2" : "convex-2"
              }`}
              style={{
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                setMain("server");
              }}
            >
              Server
            </div>
          </div>
          <div className="col-3 p-1 mb-2" style={{ height: "60px" }}>
            <div
              className={`h-100 ${
                main === "users" ? " concave-2" : "convex-2"
              }`}
              style={{
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                setMain("users");
              }}
            >
              Users
            </div>
          </div>
          <div className="col-3 p-1 mb-2" style={{ height: "60px" }}>
            <div
              className={`h-100 ${
                main === "stats" ? " concave-2" : "convex-2"
              }`}
              style={{
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                setMain("stats");
              }}
            >
              Stats
            </div>
          </div>
          <div className="col-3 p-1 mb-2" style={{ height: "60px" }}>
            <div
              className={`h-100 ${
                main === "appearance" ? " concave-2" : "convex-2"
              }`}
              style={{
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                setMain("appearance");
              }}
            >
              Front
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
