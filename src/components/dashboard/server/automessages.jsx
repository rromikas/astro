import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { FaPen, FaTrash, FaCheck, FaPlus } from "react-icons/fa";
import { useState, useEffect } from "react";
import { getLongestWidth } from "../utilities/events";
const AutoMessages = () => {
  const allEvents = ["Welcome", "Goodbye", "Level", "Role"];
  const [longestEvent, setLongestEvent] = useState(0);
  const [autoroles, setAutoroles] = useState([
    {
      on: { current: "Welcome" },
      message: { current: "Hello, {USER}, welcome to our channel" },
    },
    {
      on: { current: "Goodbye" },
      message: { current: "Bye, {USER}, we will miss you" },
    },
    {
      on: { current: "Level" },
      message: { current: "{USER} has just leveled up to {LEVEL}" },
    },
  ]);

  const [editRoles, setEditRoles] = useState({
    id: -1,
    show: false,
    type: "wait",
  });

  useEffect(() => {
    let longest = getLongestWidth(allEvents);
    setLongestEvent(longest);
  }, []);
  return (
    <div className="w-100 py-4 px-4" style={{ position: "relative" }}>
      <div className="lead justify-content-center mb-3 d-flex">
        Auto Messages
      </div>
      {editRoles.type === "wait" ? (
        <div
          onClick={(e) => {
            let index = autoroles.length;
            setAutoroles((roles) => {
              let arr = [...roles];
              arr[index] = {
                on: { current: "select" },
                message: { current: "type some message" },
              };
              return arr;
            });
            setEditRoles((edit) =>
              Object.assign({}, edit, { type: "edit", id: index, show: true })
            );
          }}
          style={{
            position: "absolute",
            top: "30px",
            right: "30px",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          className="convex-2 ml-4 select-disable"
        >
          <FaPlus fontSize="18"></FaPlus>
        </div>
      ) : (
        <div
          onClick={() => {
            setEditRoles((edit) => Object.assign({}, edit, { type: "wait" }));
          }}
          style={{
            position: "absolute",
            top: "30px",
            right: "30px",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          className="convex-2 select-disable"
        >
          <FaCheck fontSize="18"></FaCheck>
        </div>
      )}
      {editRoles.type !== "wait" && (
        <div
          onClick={() => {
            setAutoroles((roles) => {
              let arr = [...roles];
              arr.splice(editRoles.id, 1);
              return arr;
            });
            setEditRoles((edit) =>
              Object.assign({}, edit, {
                type: "wait",
                show: false,
                id: -1,
              })
            );
          }}
          style={{
            position: "absolute",
            top: "30px",
            left: "30px",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          className="convex-2 select-disable"
        >
          <FaTrash fontSize="18"></FaTrash>
        </div>
      )}
      <PerfectScrollbar
        options={{ handlers: ["keyboard", "wheel", "touch"], wheelSpeed: 0.5 }}
        className="w-100 h-71 px-3"
      >
        {editRoles.type === "wait" ? (
          <table className="table borderless w-100 lead">
            <tbody>
              <tr style={{ borderBottom: "1px solid white" }}>
                <td style={{ padding: "0px" }} scope="col">
                  Event
                </td>
                <td style={{ padding: "0px" }} scope="col">
                  Message
                </td>
                {/* <td style={{ padding: "0px" }} scope="col">
                  Edit
                </td> */}
              </tr>
              {autoroles.map((x, i) => {
                return (
                  <tr
                    className="choice"
                    onClick={() =>
                      setEditRoles((edit) =>
                        Object.assign({}, edit, {
                          id: i,
                          show: true,
                          type: "edit",
                        })
                      )
                    }
                  >
                    {Object.keys(x).map((key) => {
                      return (
                        <td style={{ padding: "7px" }}>
                          {key !== "edit" ? (
                            x[key].current.length > 12 ? (
                              x[key].current.substring(0, 12) + "..."
                            ) : (
                              x[key].current
                            )
                          ) : (
                            <div>
                              <FaPen
                                fontSize="18"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setEditRoles((edit) =>
                                    Object.assign({}, edit, {
                                      id: i,
                                      type: "edit",
                                    })
                                  );
                                }}
                              ></FaPen>
                              <FaTrash
                                fontSize="18"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setAutoroles((autoroles) => {
                                    let arr = [...autoroles];
                                    arr.splice(i, 1);
                                    return arr;
                                  });
                                }}
                              ></FaTrash>
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : editRoles.type === "edit" ? (
          <table className="table borderless w-100 lead">
            <tbody>
              <tr style={{ borderBottom: "1px solid white" }}>
                <td scope="col" style={{ padding: 0 }}>
                  Event
                </td>
                <td scope="col" style={{ padding: 0 }}>
                  Message
                </td>
              </tr>
              {autoroles[editRoles.id] ? (
                <tr style={{ borderRadius: "25px", overflow: "hidden" }}>
                  <td style={{ padding: "5px" }}>
                    {autoroles[editRoles.id].on.current}
                    <div style={{ height: "102px", padding: "5px" }}>
                      <PerfectScrollbar
                        style={{ minWidth: `${longestEvent + 55}px` }}
                        options={{
                          wheelSpeed: 0.5,
                          handlers: ["keyboard", "wheel", "touch"],
                        }}
                        className="concave-2 rounded"
                      >
                        {allEvents.map((ev) => {
                          return (
                            <div
                              className="choice"
                              onClick={() => {
                                setAutoroles((roles) => {
                                  console.log(roles);
                                  let arr = [...roles];
                                  arr[editRoles.id].on.current = ev;
                                  return arr;
                                });
                              }}
                            >
                              {ev}
                            </div>
                          );
                        })}
                      </PerfectScrollbar>
                    </div>
                  </td>
                  <td
                    style={{
                      height: "94px",
                      padding: "5px",
                    }}
                  >
                    <textarea
                      value={autoroles[editRoles.id].message.current}
                      type="text"
                      className="auto-msg-txtar w-100 h-100 concave-2 rounded"
                      onChange={(e) => {
                        e.persist();
                        setAutoroles((roles) => {
                          let arr = [...roles];
                          arr[editRoles.id].message.current = e.target.value;
                          return arr;
                        });
                      }}
                    ></textarea>
                  </td>
                </tr>
              ) : (
                ""
              )}
            </tbody>
          </table>
        ) : (
          <div></div>
        )}
      </PerfectScrollbar>
    </div>
  );
};

export default AutoMessages;
