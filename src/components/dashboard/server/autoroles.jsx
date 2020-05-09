import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { FaPen, FaTrash, FaCheck, FaPlus } from "react-icons/fa";
import { useState, useEffect } from "react";
import { getLongestWidth } from "../utilities/events";
import AutosizeInput from "react-input-autosize";
const AutoRoles = () => {
  const allRoles = ["Guest", "Fan", "Memeber", "Admin"];
  const allEvents = ["Join", "Level X"];
  const [autoroles, setAutoroles] = useState([
    {
      on: { current: "Join", choice: allEvents },
      role: { current: "Guest", choice: allRoles },
    },
    {
      on: { current: "Level 3", choice: allEvents },
      role: { current: "Fan", choice: allRoles },
    },
    {
      on: { current: "Level 10", choice: allEvents },
      role: { current: "Member", choice: allRoles },
    },
  ]);

  const [editRoles, setEditRoles] = useState({
    id: -1,
    show: false,
    type: "wait",
  });
  const [longCols, setLongCols] = useState([0, 0]);
  useEffect(() => {
    let eventsLength = getLongestWidth(allEvents);
    let rolesLength = getLongestWidth(allRoles);
    setLongCols([eventsLength, rolesLength]);
  }, []);
  useEffect(() => {
    if (
      autoroles.length &&
      autoroles[autoroles.length - 1].on.current === "select"
    ) {
      setEditRoles((edit) =>
        Object.assign({}, edit, {
          type: "edit",
          id: autoroles.length - 1,
          show: true,
        })
      );
    }
  }, [autoroles]);
  return (
    <div className="w-100 py-4 px-4" style={{ position: "relative" }}>
      <div className="lead justify-content-center mb-3 d-flex">Auto Roles</div>
      {editRoles.type === "wait" && (
        <div
          onMouseDown={(e) => {
            e.currentTarget.classList.add("convex-pressed");
            e.currentTarget.classList.remove("convex-2");
            setAutoroles((roles) => {
              let arr = [...roles];
              arr[arr.length] = {
                on: { current: "select" },
                role: { current: "select" },
              };
              return arr;
            });
          }}
          onMouseUp={(e) => {
            e.currentTarget.classList.remove("convex-pressed");
            e.currentTarget.classList.add("convex-2");
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
      )}
      <Scrollbars
        hideTracksWhenNotNeeded
        className="w-100 h-71"
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
        {editRoles.type === "wait" ? (
          <table className="table borderless w-100 lead">
            <tbody>
              <tr style={{ borderBottom: "1px solid white" }}>
                <td style={{ padding: "0px" }} scope="col">
                  Event
                </td>
                <td style={{ padding: "0px" }} scope="col">
                  Role
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
                            x[key].current
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
                  Role
                </td>
                <td scope="col" style={{ padding: 0 }}>
                  Edit
                </td>
              </tr>
              <tr>
                {Object.keys(
                  Object.assign({}, autoroles[editRoles.id], {
                    save: { current: "Save" },
                  })
                ).map((key) => {
                  return (
                    <td style={{ padding: "5px" }}>
                      {key === "save" ? (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            padding: "5px 0px",
                          }}
                        >
                          <FaCheck
                            onClick={() => {
                              setEditRoles((edit) =>
                                Object.assign({}, edit, { type: "wait" })
                              );
                            }}
                          ></FaCheck>
                          <FaTrash
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
                          ></FaTrash>
                        </div>
                      ) : (
                        <AutosizeInput
                          name="form-field-name"
                          value={autoroles[editRoles.id][key].current}
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            outline: "none",
                          }}
                          onChange={function (event) {
                            // event.target.value contains the new value
                            setAutoroles((roles) => {
                              let arr = [...roles];
                              arr[editRoles.id][key].current =
                                event.target.value;
                              return arr;
                            });
                          }}
                        />
                      )}
                    </td>
                  );
                })}
              </tr>
              <tr style={{ overflow: "hidden" }}>
                <td style={{ height: "104px", padding: "5px" }}>
                  <Scrollbars
                    className="concave-2 rounded"
                    style={{ minWidth: `${longCols[0] + 50}px` }}
                    hideTracksWhenNotNeeded
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
                  </Scrollbars>
                </td>
                <td style={{ height: "104px", padding: "5px" }}>
                  <Scrollbars
                    style={{ minWidth: `${longCols[1] + 50}px` }}
                    className="concave-2 rounded"
                    hideTracksWhenNotNeeded
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
                    {allRoles.map((role) => {
                      return (
                        <div
                          onClick={() => {
                            setAutoroles((roles) => {
                              console.log(roles);
                              let arr = [...roles];
                              arr[editRoles.id].role.current = role;
                              return arr;
                            });
                          }}
                          className="choice"
                        >
                          {role}
                        </div>
                      );
                    })}
                  </Scrollbars>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div></div>
        )}
      </Scrollbars>
    </div>
  );
};

export default AutoRoles;
