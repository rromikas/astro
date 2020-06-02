import React, { useRef, useEffect } from "react";
import Level from "./level";
import PerfectScrollbar from "react-perfect-scrollbar";
import { uid } from "react-uid";

const Scoreboard = ({ users }) => {
  const scrollbar = useRef(null);
  useEffect(() => {
    scrollbar.current.updateScroll();
  }, []);
  return (
    <div className="w-100 h-100 pt-4 px-4">
      <div className="lead text-center mb-3">Leaderboard</div>
      <PerfectScrollbar
        ref={scrollbar}
        options={{
          wheelSpeed: 0.4,
          wheelPropagation: false,
          handlers: ["keyboard", "wheel", "touch"],
        }}
        className="w-100 h-84 px-3"
      >
        <table className="table table-striped borderless w-100 lead">
          <tbody>
            {users
              .sort((a, b) => (a.exp > b.exp ? -1 : a.exp < b.exp ? 1 : 0))
              .map((x, i) => (
                <tr className="scrbrd-row" key={uid(x)}>
                  <td className="align-middle text-center td-left">
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        background:
                          i + 1 === 1
                            ? "gold"
                            : i + 1 === 2
                            ? "silver"
                            : i + 1 === 3
                            ? "#cd7f32"
                            : "gray",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "5px",
                      }}
                    >
                      {i + 1}
                    </div>
                  </td>
                  <td className="align-middle text-center">
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        marginRight: "10px",
                        borderRadius: "50%",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={
                          x.avatar && x.avatar !== ""
                            ? `https://cdn.discordapp.com/avatars/${x.user_id}/${x.avatar}.png`
                            : "https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png"
                        }
                        alt={x.avatar}
                        className="img-fluid"
                      ></img>
                    </div>
                  </td>
                  <td className="align-middle text-center">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          width: "90%",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ marginRight: "5px" }}>{x.username}</div>
                        <div> Exp: {x.experience}</div>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle d-flex justify-content-center td-right">
                    <Level level={x.level} exp={x.experience}></Level>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </PerfectScrollbar>
    </div>
  );
};

export default Scoreboard;
