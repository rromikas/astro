import React, { useState } from "react";
import { emojis, commands } from "../../data/data";
import Chart from "../charts/chart";
import CommandsStatus from "./commands";
import Channels from "./channels";
import Prefix from "./prefix";
import Table from "./table";
const Dashboard = () => {
  const [prefix, setPrefix] = useState("!");
  return (
    <div
      className="container-fluid pb-3"
      style={{ maxWidth: "1300px", minHeight: "100%" }}
    >
      <div className="row no-gutters justify-content-between">
        <Channels></Channels>
        <Prefix setPrefix={setPrefix} prefix={prefix}></Prefix>
        <CommandsStatus prefix={prefix}></CommandsStatus>
      </div>
      <div className="row no-gutters">
        <div
          className="col-12 col-md-6 pl-2 pr-3 py-3"
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
          className="col-12 col-md-6 pl-3 pr-2 py-3"
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
        <div className="col-auto pl-2 p-3" style={{ height: "400px" }}>
          <Table></Table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
