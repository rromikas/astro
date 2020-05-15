import React, { useState, useRef, useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { uploadSvg, readFiles, uploadPng } from "../utilities/htmltocanvas";
import {
  onMD,
  onML,
  onMM,
  onMU,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
} from "../utilities/events";
import { channels } from "../../../data/data";
const Channels = ({ prefix, preview = false }) => {
  const [move, setMove] = useState([0, 0]);
  const scrollbar = useRef(null);
  useEffect(() => {
    scrollbar.current.updateScroll();
  }, []);
  return (
    <div
      className={`pnl${
        !preview ? " convex-1" : ""
      } row px-4 py-2 pt-4 no-gutters justify-content-between shn h-100 channels`}
      onClick={() => {
        uploadPng();
        // uploadSvg();
        // readFiles("astro").then((url) => console.log(url));
      }}
    >
      <div className="col-12 lead text-center">Channels</div>
      <PerfectScrollbar
        ref={scrollbar}
        options={{
          wheelSpeed: 0.4,
          wheelPropagation: false,
          handlers: ["keyboard", "wheel", "touch"],
        }}
        className={`col-11 col-lg-10 mx-auto h-71 mr-1`}
        style={{ minWidth: "245px" }}
      >
        <div className={`row no-gutters h-100 justify-content-center`}>
          {channels
            .filter((x, i) => i < 5)
            .map((x, i) => {
              return (
                <div
                  key={`channel-${i}`}
                  className="col-12 h-24 px-4"
                  style={{ marginBottom: "2px" }}
                >
                  <div className="row no-gutters h-100 flex-nowrap justify-content-between">
                    <div className="col lead text-nowrap">{x.name}</div>
                    <div className="col-auto py-1" style={{ width: "74px" }}>
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
                          onTouchMove={(e) =>
                            handleTouchMove(e, x.name, setMove)
                          }
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

export default Channels;
