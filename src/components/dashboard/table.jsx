import React, { useState } from "react";
import { users } from "../../data/data";
import DropDown from "./dropdown";

const Table = () => {
  const [drop, setDrop] = useState([-1, -1]); // one drop down menu at a time on the table
  const header = [
    "image",
    "name",
    "role",
    "messages sent",
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
        <div className="row no-gutters">
          <div className="col-12 text-center lead mb-4">User Manager</div>
          <div
            className="col-12"
            style={{
              overflowX: "auto",
              overflowY: "scroll",
              height: "250px",
            }}
          >
            <div
              className="row no-gutters justify-content-around"
              style={{ minWidth: "600px", fontSize: "17px" }}
            >
              {Object.keys(users[0]).map((x, i) => {
                return (
                  <div
                    className="col-auto"
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
                              <img src={y[x]} className="img-fluid"></img>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
