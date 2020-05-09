import React from "react";
import { users } from "../../../data/data";
import Level from "./level";
import { Scrollbars } from "react-custom-scrollbars";
const Scoreboard = () => {
  return (
    <div className="w-100 h-100 pt-4 px-4">
      <div className="lead text-center ">Leaderboard</div>
      <Scrollbars
        hideTracksWhenNotNeeded
        className="w-100 h-85"
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
        <table className="table borderless w-100 lead">
          <tbody>
            {users
              .sort((a, b) => (a.exp > b.exp ? -1 : a.exp < b.exp ? 1 : 0))
              .map((x, i) => (
                <tr className="scrbrd-row">
                  <td className="align-middle text-center">
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
                      }}
                    >
                      {i + 1}
                    </div>
                  </td>
                  <td className="align-middle text-center">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          marginRight: "10px",
                        }}
                      >
                        <img
                          src={x.image}
                          alt={x.image}
                          className="img-fluid"
                        ></img>
                      </div>
                      <div>{x.name}</div>
                    </div>
                  </td>
                  <td className="align-middle text-center">
                    Experience <br></br>
                    {x.exp}
                  </td>
                  <td className="align-middle d-flex justify-content-center">
                    <Level level={x.level} exp={x.exp}></Level>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </Scrollbars>
    </div>
  );
};

export default Scoreboard;
