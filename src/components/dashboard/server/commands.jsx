import React, { useState, useEffect, useRef } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  onMD,
  onML,
  onMM,
  onMU,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
} from "../utilities/events";

const Commands = ({ prefix, preview = false, updateCommand }) => {
  const [commands, setCommands] = useState([
    { name: "warn", uses: 8, enabled: true },
    { name: "role", uses: 2, enabled: true },
    { name: "mute", uses: 5, enabled: false },
    { name: "kick", uses: 18, enabled: true },
    { name: "play", uses: 25, enabled: false },
    { name: "user-info", uses: 18, enabled: true },
    { name: "unmute", uses: 18, enabled: true },
    { name: "ban", uses: 18, enabled: false },
    { name: "unban", uses: 18, enabled: true },
    { name: "tempmute", uses: 18, enabled: false },
    { name: "role-info", uses: 18, enabled: true },
    { name: "emoji", uses: 18, enabled: true },
  ]);
  const [move, setMove] = useState([0, 0]);
  const scrollbar = useRef(null);
  useEffect(() => {
    scrollbar.current.updateScroll();
  }, []);
  return (
    <div
      className={`pnl${
        !preview ? " convex-1" : ""
      } row px-3 py-2 pt-4 no-gutters justify-content-between shn h-100`}
    >
      <div className="col-12 lead text-center">Commands Status</div>
      <PerfectScrollbar
        ref={scrollbar}
        options={{
          wheelSpeed: 0.4,
          wheelPropagation: false,
          handlers: ["keyboard", "wheel", "touch"],
        }}
        className="col-11 col-lg-10 mx-auto h-71"
      >
        <div className="row no-gutters h-100 justify-content-center">
          {commands.map((x, i) => {
            return (
              <div
                key={`channel-${i}`}
                className="col-12 col-sm-6 col-lg-12 h-24 px-4"
                style={{ marginBottom: "2px" }}
              >
                <div className="row no-gutters h-100 flex-nowrap justify-content-between">
                  <div className="col lead text-nowrap">{prefix + x.name}</div>
                  <div className="col-auto py-1" style={{ width: "74px" }}>
                    <div
                      className="pnl concave-2"
                      style={{
                        justifyContent: x.enabled ? "flex-start" : "flex-end",
                      }}
                    >
                      <div
                        onMouseDown={(e) => onMD(e, x.name)}
                        onMouseUp={(e) =>
                          onMU(e, x.name, setMove, (enabled) => {
                            setCommands((prev) => {
                              let arr = [...prev];
                              arr[i].enabled = enabled;
                              return arr;
                            });
                          })
                        }
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
      </PerfectScrollbar>
    </div>
  );
};

export default Commands;
