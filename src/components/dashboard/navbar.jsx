import React from "react";
import { users } from "../../data/data";
const Navbar = ({ setMain, main }) => {
  return (
    <div className="row no-gutters">
      <div className="col p-1 mb-2" style={{ height: "60px" }}>
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
      <div className="col-auto p-1 mr-2 mb-2" style={{ height: "60px" }}>
        <div
          className={`h-100 convex-2${
            main === "server" ? " convex-pressed" : ""
          }`}
          style={{
            borderRadius: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "130px",
            cursor: "pointer",
          }}
          onClick={() => {
            setMain("server");
          }}
        >
          Server
        </div>
      </div>
      <div className="col-auto p-1 mr-2 mb-2" style={{ height: "60px" }}>
        <div
          className={`h-100 convex-2${
            main === "users" ? " convex-pressed" : ""
          }`}
          style={{
            borderRadius: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "130px",
            cursor: "pointer",
          }}
          onClick={() => {
            setMain("users");
          }}
        >
          Users
        </div>
      </div>
      <div className="col-auto p-1 mb-2" style={{ height: "60px" }}>
        <div
          className={`h-100 convex-2${
            main === "stats" ? " convex-pressed" : ""
          }`}
          style={{
            borderRadius: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "130px",
            cursor: "pointer",
          }}
          onClick={() => {
            setMain("stats");
          }}
        >
          Stats
        </div>
      </div>
    </div>
  );
};

export default Navbar;
