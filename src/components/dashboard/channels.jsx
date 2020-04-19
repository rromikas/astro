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

const Channels = () => {
  const [move, setMove] = useState([0, 0]);
  return (
      <div className="pnl convex-1 row px-4 py-2 no-gutters justify-content-between shn h-100">
        <div className="col-12 lead py-3 text-center h-20">Channels</div>
        <div
          className="col-12 my-1 h-60 px-3"
          style={{ overflowY: "scroll", overflowX: "hidden" }}
        >
          {channels.map((x, i) => {
            return (
              <div
                key={`channel-${i}`}
                className="row no-gutters justify-content-between h-33 flex-nowrap"
              >
                <div className="col-6 lead">{x.name}</div>
                <div
                  className="col-auto py-2 px-3"
                  style={{ minWidth: "125px" }}
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
              </div>
            );
          })}
        </div>
      </div>
    
  );
};

export default Channels;
