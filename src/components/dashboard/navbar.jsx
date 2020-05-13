import React from "react";
import { users } from "../../data/data";
const Navbar = ({ setMain, main }) => {
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
              padding: "0 30px 0 10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{ width: "32px", heigth: "32px", marginRight: "10px" }}
              >
                <img
                  alt={users[0].image}
                  src={users[0].image}
                  className="img-fluid"
                ></img>
              </div>
              {users[0].name} • {users[0].role}
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
