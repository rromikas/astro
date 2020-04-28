import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import {
  onMD,
  onML,
  onMM,
  onMU,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
} from "./events";
import { commands } from "../../data/data";
const CommandsStatus = ({ prefix }) => {
  const [move, setMove] = useState([0, 0]);
  return (
    <div className="pnl convex-1 row px-4 py-2 pt-4 no-gutters justify-content-between shn h-100">
      <div className="col-12 lead text-center">Commands Status</div>
      <Scrollbars
        hideTracksWhenNotNeeded
        className="col-11 col-lg-10 mx-auto h-60 px-3"
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
      >
        <div className="row no-gutters h-100 justify-content-center pr-3">
          {commands.map((x, i) => {
            return (
              <div
                key={`channel-${i}`}
                className="col-12 col-sm-6 col-lg-12 h-25"
              >
                <div className="row no-gutters h-100 flex-nowrap justify-content-between">
                  <div className="col lead text-nowrap">{prefix + x.name}</div>
                  <div
                    className="col-auto py-1 px-3"
                    style={{ minWidth: "110px" }}
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
              </div>
            );
          })}
        </div>
      </Scrollbars>
    </div>
  );
};

export default CommandsStatus;
