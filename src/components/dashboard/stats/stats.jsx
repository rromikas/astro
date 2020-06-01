import React from "react";
import Scoreboard from "./scoreboard";
import Chart from "../../charts/chart";
const Stats = ({ users, commands, emojis }) => {
  return (
    <div className="row no-gutters">
      <div
        className="col-12 col-md-6 py-2 pl-2 pr-md-3 pr-2"
        style={{ height: "600px" }}
      >
        <div className="pnl convex-1 shn">
          <Scoreboard users={users}></Scoreboard>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div
          className="row no-gutters px-3 pt-2 pb-3"
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
          className="row no-gutters pt-3 px-3 pb-2"
          style={{ height: "300px" }}
        >
          <div className="pnl convex-1 shn">
            <Chart
              data={{
                title: "Top Commands",
                units: "times",
                items: commands,
              }}
            ></Chart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
