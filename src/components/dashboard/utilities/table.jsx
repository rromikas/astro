import React, { useState } from "react";
import { users } from "../../../data/data";
import DropDown from "./dropdown";
import { Scrollbars } from "react-custom-scrollbars";

const Table = () => {
  const [drop, setDrop] = useState([-1, -1]); // one drop down menu at a time on the table
  const header = [
    "image",
    "name",
    "role",
    "experience",
    "level",
    "warnings",
    "status",
  ];
  const title = "User Manager";
  return (
    <div
      className="pnl convex-1 p-4 shn"
      onClick={(e) => {
        console.log(e.target);
      }}
    >
      <div className="container-fluid">
        <div className="row no-gutters h-100">
          <div className="col-12 text-center lead">User Manager</div>
          <Scrollbars
            hideTracksWhenNotNeeded
            className="col-12 h-83"
            renderTrackHorizontal={(props) => (
              <div {...props} className="track-horizontal" />
            )}
            renderTrackVertical={(props) => (
              <div {...props} className="track-vertical" />
            )}
            renderThumbHorizontal={(props) => (
              <div {...props} className="thumb-horizontal" />
            )}
            renderThumbVertical={(props) => (
              <div {...props} className="thumb-vertical" />
            )}
            renderView={(props) => <div {...props} className="view" />}
          >
            <div
              className="row no-gutters justify-content-around pb-2 pr-2"
              style={{ minWidth: "700px", fontSize: "17px" }}
            >
              {Object.keys(users[0]).map((x, i) => {
                return (
                  <div
                    className="col-auto pr-2"
                    style={{ borderRadiius: "25px" }}
                    key={`tbl-clmn-${i}`}
                  >
                    <div
                      className="row no-gutters align-items-center justify-content-center"
                      style={{ height: "40px" }}
                    >
                      {header[i]}
                    </div>
                    {users.map((y, j) => {
                      return (
                        <div
                          key={`clmn-${i}-row-${j}-tbl-${title}`}
                          className="row no-gutters align-items-center justify-content-center"
                          style={{ height: "50px" }}
                        >
                          {x === "image" ? (
                            <div style={{ width: "30px", heigth: "30px" }}>
                              <img
                                alt={y[x]}
                                src={y[x]}
                                className="img-fluid"
                              ></img>
                            </div>
                          ) : x === "role" ? (
                            <DropDown
                              open={() =>
                                setDrop(
                                  drop[0] === i && drop[1] === j
                                    ? [-1, -1]
                                    : [i, j]
                                )
                              }
                              show={drop[0] === i && drop[1] === j}
                              items={["admin", "user", "guest"]}
                              current={y[x]}
                              place="right"
                            ></DropDown>
                          ) : x === "status" ? (
                            <DropDown
                              place="left"
                              open={() =>
                                setDrop(
                                  drop[0] === i && drop[1] === j
                                    ? [-1, -1]
                                    : [i, j]
                                )
                              }
                              show={drop[0] === i && drop[1] === j}
                              items={["kicked", "banned", "muted", "okay"]}
                              current={y[x]}
                            ></DropDown>
                          ) : (
                            y[x]
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </Scrollbars>
        </div>
      </div>
    </div>
  );
};

export default Table;
