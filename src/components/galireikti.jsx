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
</div>;
