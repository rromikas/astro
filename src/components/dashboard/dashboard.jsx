import React, { useState } from "react";
import { emojis, commands } from "../../data/data";
import Chart from "../charts/chart";
import CommandsStatus from "./commands";
import Channels from "./channels";
import Prefix from "./prefix";
import Table from "./table";
import AutoRoles from "./autoroles";
import AutoMessages from "./automessages";
const Dashboard = () => {
  const [prefix, setPrefix] = useState("!");
  return (
    <div
      className="container-fluid pb-3"
      style={{ maxWidth: "1300px", minHeight: "100%" }}
    >
      <div className="row no-gutters justify-content-between">
        <div
          className="p-2 col-lg-4 col-md-8 col-sm-8 col-12 col-xl"
          style={{ height: "300px" }}
        >
          <Channels></Channels>
        </div>
        <div
          className="col-lg-3 col-md-4 col-sm-4 col-8 p-2"
          style={{ height: "300px", maxWidth: "265px" }}
        >
          <Prefix setPrefix={setPrefix} prefix={prefix}></Prefix>
        </div>
        <div
          className="col-lg-5 col-sm-12 col-12 p-2"
          style={{ height: "300px" }}
        >
          <CommandsStatus prefix={prefix}></CommandsStatus>
        </div>
      </div>
      <div className="row no-gutters">
        <div
          className="col-12 col-md-6 py-3 pl-2 pr-md-3 pr-2"
          style={{ height: "300px" }}
        >
          <div className="pnl convex-1 shn">
            <AutoRoles></AutoRoles>
          </div>
        </div>
        <div
          className="col-12 col-md-6 py-3 pl-md-3 pl-2 pr-2"
          style={{ height: "300px" }}
        >
          <div className="pnl convex-1 shn">
            <AutoMessages></AutoMessages>
          </div>
        </div>
      </div>
      <div className="row no-gutters">
        <div
          className="col-12 col-md-6 py-3 pl-2 pr-md-3 pr-2"
          style={{ height: "300px" }}
        >
          <div className="pnl convex-1 shn">
            <Chart
              data={{
                title: "Top Emojis",
                units: "times",
                items: emojis,
              }}
            ></Chart>
          </div>
        </div>
        <div
          className="col-12 col-md-6 py-3 pl-md-3 pl-2 pr-2"
          style={{ height: "300px" }}
        >
          <div className="pnl convex-1 shn">
            <Chart
              data={{
                title: "Top Commands",
                units: "times",
                items: commands.slice(0, 4),
              }}
            ></Chart>
          </div>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col p-2" style={{ height: "400px", width: "600px" }}>
          <Table></Table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
