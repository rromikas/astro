import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { FaPen, FaTrash, FaCheck, FaPlus } from "react-icons/fa";
import { useState, useEffect } from "react";
import { getLongestWidth } from "../utilities/events";
import AutosizeInput from "react-input-autosize";
import { uid } from "react-uid";
const AutoRoles = ({ rolesData, createRole, updateRole }) => {
  const [roles, setRoles] = useState({
    autoroles: [],
    roles: [],
  });

  const [editRoles, setEditRoles] = useState({
    id: -1,
    show: false,
    type: "wait",
    newRole: false,
  });

  const [longCols, setLongCols] = useState([0, 0]);
  useEffect(() => {
    rolesData.roles.push({ id: -1, name: "select" });
    setRoles(rolesData);
    let eventsLength = getLongestWidth(["Level X"]);
    let rolesLength = getLongestWidth([...roles.roles.map((x) => x.name)]);
    setLongCols([eventsLength, rolesLength]);
  }, [rolesData]);

  return (
    <div className="w-100 py-4 px-4" style={{ position: "relative" }}>
      <div className="lead justify-content-center mb-3 d-flex">Auto Roles</div>
      {editRoles.type === "wait" ? (
        <div
          onClick={(e) => {
            let index = roles.autoroles.length;
            setRoles((rls) => {
              let arr = [...rls.autoroles];
              arr.unshift({
                min_lvl: "X",
                role_id: -1,
              });
              return Object.assign({}, rls, { autoroles: arr });
            });
            setEditRoles((edit) =>
              Object.assign({}, edit, {
                type: "edit",
                id: 0,
                show: true,
                newRole: true,
              })
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
          className="convex-2 select-disable"
        >
          <FaPlus fontSize="18"></FaPlus>
        </div>
      ) : (
        <div
          onClick={() => {
            if (
              roles.autoroles[editRoles.id].min_lvl === "X" ||
              roles.autoroles[editRoles.id].role_id === -1
            ) {
              setRoles((rls) => {
                let arr = [...rls.autoroles];
                arr.splice(editRoles.id, 1);
                return Object.assign({}, rls, { autoroles: arr });
              });
            } else {
              if (editRoles.newRole) {
                createRole(roles.autoroles[editRoles.id]);
              } else {
                updateRole(roles.autoroles[editRoles.id]);
              }
            }
            setEditRoles((edit) =>
              Object.assign({}, edit, { type: "wait", newRole: false })
            );
          }}
          style={{
            position: "absolute",
            top: "30px",
            right: "30px",
            width: "30px",
            height: "30px",
            borderRadius: "50px",
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
            setRoles((rls) => {
              let arr = [...rls.autoroles];
              arr.splice(editRoles.id, 1);
              return Object.assign({}, rls, { autoroles: arr });
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
        options={{ wheelSpeed: 0.4, handlers: ["keyboard", "wheel", "touch"] }}
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
                  Role
                </td>
                {/* <td style={{ padding: "0px" }} scope="col">
                  Edit
                </td> */}
              </tr>

              {roles.autoroles.map((x, i) => {
                return (
                  <tr
                    key={uid(x)}
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
                    <td style={{ padding: "7px" }}>{"Level " + x.min_lvl}</td>
                    <td style={{ padding: "7px" }}>
                      {roles.roles.find((r) => r.id === x.role_id).name}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : editRoles.type === "edit" ? (
          <table className="table borderless w-100 lead">
            {roles.autoroles[editRoles.id] ? (
              <tbody>
                <tr style={{ borderBottom: "1px solid white" }}>
                  <td scope="col" style={{ padding: 0 }}>
                    Event
                  </td>
                  <td scope="col" style={{ padding: 0 }}>
                    Role
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "5px" }}>
                    <AutosizeInput
                      name="form-field-name"
                      value={"Level " + roles.autoroles[editRoles.id]?.min_lvl}
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                      }}
                      onChange={function (event) {
                        // event.target.value contains the new value
                        let parts = event?.target?.value.split(" ");
                        setRoles((rls) => {
                          let arr = [...rls.autoroles];
                          arr[editRoles.id].min_lvl =
                            parts.length === 2 ? +parts[1] : 0;
                          return Object.assign({}, rls, { autoroles: arr });
                        });
                      }}
                    />
                  </td>
                  <td style={{ padding: "5px" }}>
                    {
                      roles.roles.find(
                        (r) => r.id === roles.autoroles[editRoles.id].role_id
                      ).name
                    }
                  </td>
                </tr>
                <tr style={{ overflow: "hidden" }}>
                  <td style={{ height: "104px", padding: "5px" }}>
                    <PerfectScrollbar
                      options={{
                        wheelSpeed: 0.4,
                        handlers: ["keyboard", "wheel", "touch"],
                      }}
                      className="concave-2 rounded"
                      style={{ minWidth: `${longCols[0] + 50}px` }}
                    >
                      {["Level X"].map((ev) => {
                        return (
                          <div
                            key={uid(ev)}
                            className="choice"
                            onClick={() => {
                              setRoles((rls) => {
                                console.log(rls);
                                let arr = [...rls.autoroles];
                                arr[editRoles.id].min_lvl = ev.split(" ")[1];
                                return Object.assign({}, rls, {
                                  autoroles: arr,
                                });
                              });
                            }}
                          >
                            {ev}
                          </div>
                        );
                      })}
                    </PerfectScrollbar>
                  </td>
                  <td style={{ height: "104px", padding: "5px" }}>
                    <PerfectScrollbar
                      options={{ wheelSpeed: 0.4 }}
                      style={{ minWidth: `${longCols[1] + 50}px` }}
                      className="concave-2 rounded"
                    >
                      {roles.roles
                        .slice(0, roles.roles.length - 1)
                        .map((role) => {
                          return (
                            <div
                              key={uid(role)}
                              onClick={() => {
                                setRoles((rls) => {
                                  let arr = [...rls.autoroles];
                                  arr[editRoles.id].role_id = role.id;
                                  return Object.assign({}, rls, {
                                    autoroles: arr,
                                  });
                                });
                              }}
                              className="choice"
                            >
                              {role.name}
                            </div>
                          );
                        })}
                    </PerfectScrollbar>
                  </td>
                </tr>
              </tbody>
            ) : (
              ""
            )}
          </table>
        ) : (
          <div></div>
        )}
      </PerfectScrollbar>
    </div>
  );
};

export default AutoRoles;
