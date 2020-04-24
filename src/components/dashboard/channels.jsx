import React, { useState } from "react";
import {
  onMD,
  onML,
  onMM,
  onMU,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
} from "./events";
import { channels } from "../../data/data";
import Scrollbars from "react-custom-scrollbars";

const Channels = () => {
  const [move, setMove] = useState([0, 0]);
  return (
    <div className="pnl convex-1 row px-4 py-2 no-gutters justify-content-between shn h-100">
      <div className="col-12 lead py-3 text-center h-20">Channels</div>
      <Scrollbars
        className="col-10 mx-auto my-1 h-60"
        style={{ minWidth: "254px" }}
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
        <div className="container-fluid p-0">
          <div className="row no-gutters justify-content-between flex-nowrap">
            <div className="col-auto">
              {channels.map((x, i) => {
                return (
                  <div
                    key={`channel-name-${i}`}
                    className="lead p-2"
                    style={{ height: "53px" }}
                  >
                    {x.name}
                  </div>
                );
              })}
            </div>
            <div className="col-auto">
              {channels.map((x, i) => {
                return (
                  <div
                    key={`channel-status-${i}`}
                    className="p-2"
                    style={{ width: "100px", height: "53px" }}
                  >
                    <div
                      className="pnl concave-2"
                      style={{
                        justifyContent: x.enabled ? "flex-start" : "flex-end",
                      }}
                    >
                      <div
                        onMouseDown={(e) => onMD(e, x.name)}
                        onMouseUp={(e) => onMU(e, x.name, setMove)}
                        onMouseMove={(e) => onMM(e, x.name, setMove)}
                        onMouseLeave={() => onML(setMove)}
                        onTouchStart={(e) => handleTouchStart(e, x.name)}
                        onTouchMove={(e) => handleTouchMove(e, x.name, setMove)}
                        onTouchEnd={(e) => handleTouchEnd(e, x.name, setMove)}
                        className={`pnl w-65 convex-2 ${
                          x.enabled ? "enbl-btn" : "dsbl-btn"
                        }`}
                        style={{
                          transform: `translateX(${
                            move[0] === x.name ? move[1] : 0
                          }px)`,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Scrollbars>
    </div>
  );
};

export default Channels;
