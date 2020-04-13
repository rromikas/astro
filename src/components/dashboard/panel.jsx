import React from "react";

const Panel = ({ classes = { container: [], panel: [] }, children }) => {
  return (
    <div
      className={classes.container.reduce(
        (x, next) => x.toString() + " " + next.toString(),
        "pnl"
      )}
    >
      <div
        className={classes.panel.reduce(
          (x, next) => x.toString() + " " + next.toString(),
          "pnl"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Panel;
