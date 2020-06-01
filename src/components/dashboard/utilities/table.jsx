import React, { useState, useRef, useEffect } from "react";
import DropDown from "./dropdown";
import PerfectScrollbar from "react-perfect-scrollbar";

const Table = ({ users }) => {
  const scrollbar = useRef(null);
  const [drop, setDrop] = useState([-1, -1]); // one drop down menu at a time on the table

  const title = "User Manager";
  useEffect(() => {
    scrollbar.current.updateScroll();
  }, []);
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
          <PerfectScrollbar
            className="col-12 h-83"
            ref={scrollbar}
            options={{ wheelSpeed: 0.5 }}
          >
            <div
              className="row no-gutters justify-content-around pb-2 pr-2"
              style={{ minWidth: "700px", fontSize: "17px" }}
            >
              {users.length &&
                Object.keys(users[0]).map((x, i) => {
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
                        {x.toString() === "" ? "empty" : x.toString()}
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
                            ) : y[x].toString() === "" ? (
                              "empty"
                            ) : (
                              y[x].toString()
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
            </div>
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
};

export default Table;
