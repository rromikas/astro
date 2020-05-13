import React, { useState } from "react";
import Server from "./server/server";
import Navbar from "./navbar";
import Users from "./users/users";
import Stats from "./stats/stats";
import Appearance from "./appearance/appearance";
const Dashboard = () => {
  const [main, setMain] = useState("server");
  return (
    <div
      className="px-3"
      style={{ maxWidth: "1300px", minHeight: "100%", margin: "auto" }}
    >
      <Navbar setMain={setMain} main={main}></Navbar>
      {main === "server" ? (
        <Server></Server>
      ) : main === "users" ? (
        <Users></Users>
      ) : main === "stats" ? (
        <Stats></Stats>
      ) : main === "appearance" ? (
        <Appearance></Appearance>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dashboard;
