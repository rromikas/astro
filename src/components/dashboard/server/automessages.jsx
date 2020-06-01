import React, { useState, useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { FaCheck } from "react-icons/fa";
import { getLongestWidth } from "../utilities/events";
import { uid } from "react-uid";
const AutoMessages = ({ server, updateMessages, setServer }) => {
  const [longestEvent, setLongestEvent] = useState(0);

  const [editRoles, setEditRoles] = useState({
    id: -1,
    show: false,
    type: "wait",
  });

  useEffect(() => {
    let longest = getLongestWidth(["farewell", "greeting"]);
    setLongestEvent(longest);
  }, []);

  return (
    <div className="w-100 py-4 px-4" style={{ position: "relative" }}>
      <div className="lead justify-content-center mb-3 d-flex">
        Auto Messages
      </div>
      {editRoles.type !== "wait" && (
        <div
          onClick={() => {
            setEditRoles((edit) => Object.assign({}, edit, { type: "wait" }));
            updateMessages();
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
              {["farewell", "greeting"].map((x, i) => {
                return (
                  <tr
                    key={uid(x)}
                    className="choice"
                    onClick={() =>
                      setEditRoles((edit) =>
                        Object.assign({}, edit, {
                          id: x,
                          show: true,
                          type: "edit",
                        })
                      )
                    }
                  >
                    <td style={{ padding: "7px" }}>{x}</td>
                    <td style={{ padding: "7px" }}>
                      {server[x].length > 12
                        ? server[x].substring(0, 12) + "..."
                        : server[x]}
                    </td>
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
              {server[editRoles.id] !== null ? (
                <tr style={{ borderRadius: "25px", overflow: "hidden" }}>
                  <td style={{ padding: "5px" }}>{editRoles.id}</td>
                  <td
                    style={{
                      height: "94px",
                      padding: "5px",
                    }}
                  >
                    <textarea
                      value={server[editRoles.id]}
                      type="text"
                      className="auto-msg-txtar w-100 h-100 concave-2 rounded"
                      onChange={(e) => {
                        e.persist();
                        setServer({
                          [editRoles.id]: e.target.value,
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
