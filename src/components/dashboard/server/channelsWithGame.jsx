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
import { uid } from "react-uid";
// import { channels } from "../../../data/data";

const ChannelsWithGame = ({
  prefix,
  preview = false,
  channels,
  updateChannel,
}) => {
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
    >
      <div className="col-12 lead text-center">Channels</div>
      <PerfectScrollbar
        ref={scrollbar}
        options={{
          wheelSpeed: 0.4,
          wheelPropagation: false,
          handlers: ["keyboard", "wheel", "touch"],
        }}
        className={`col-11 col-lg-10 mx-auto h-78 mr-1`}
        style={{ minWidth: "245px" }}
      >
        <table className="table borderless">
          <tbody>
            <tr>
              <td className="px-0 pb-2 pt-0"></td>
              <td className="px-0 pb-2 pt-0">Game Enabled</td>
              <td className="px-0 pb-2 pt-0">Bot enabled</td>
            </tr>
            {channels.map((x) => {
              return (
                <tr key={uid(x)}>
                  <td className="px-0 py-1">{x.name}</td>
                  <td className="px-0 py-1">
                    <div
                      className="pnl concave-2 mx-auto"
                      style={{
                        height: "33px",
                        width: "72px",
                        justifyContent: x.game ? "flex-start" : "flex-end",
                      }}
                    >
                      <div
                        onMouseDown={(e) => onMD(e, x.name + "game")}
                        onMouseUp={(e) =>
                          onMU(e, x.name + "game", setMove, (enabled) => {
                            let updatedChannel = Object.assign({}, x, {
                              game: enabled,
                            });
                            updateChannel(updatedChannel);
                          })
                        }
                        onMouseMove={(e) => onMM(e, x.name + "game", setMove)}
                        onMouseLeave={() => onML(setMove)}
                        onTouchStart={(e) =>
                          handleTouchStart(e, x.name + "game")
                        }
                        onTouchMove={(e) =>
                          handleTouchMove(e, x.name + "game", setMove)
                        }
                        onTouchEnd={(e) =>
                          handleTouchEnd(e, x.name + "game", setMove)
                        }
                        className={`pnl w-65 convex-2 ${
                          x.game ? "enbl-btn" : "dsbl-btn"
                        }`}
                        style={{
                          transform: `translateX(${
                            move[0] === x.name + "game" ? move[1] : 0
                          }px)`,
                        }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-0 py-1">
                    <div
                      className="pnl concave-2 mx-auto"
                      style={{
                        justifyContent: !x.ignore ? "flex-start" : "flex-end",
                        height: "33px",
                        width: "72px",
                      }}
                    >
                      <div
                        onMouseDown={(e) => onMD(e, x.name)}
                        onMouseUp={(e) =>
                          onMU(e, x.name, setMove, (enabled) => {
                            let updatedChannel = Object.assign({}, x, {
                              ignore: !enabled,
                            });
                            updateChannel(updatedChannel);
                          })
                        }
                        onMouseMove={(e) => onMM(e, x.name, setMove)}
                        onMouseLeave={() => onML(setMove)}
                        onTouchStart={(e) => handleTouchStart(e, x.name)}
                        onTouchMove={(e) => handleTouchMove(e, x.name, setMove)}
                        onTouchEnd={(e) => handleTouchEnd(e, x.name, setMove)}
                        className={`pnl w-65 convex-2 ${
                          !x.ignore ? "enbl-btn" : "dsbl-btn"
                        }`}
                        style={{
                          transform: `translateX(${
                            move[0] === x.name ? move[1] : 0
                          }px)`,
                        }}
                      ></div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </PerfectScrollbar>
    </div>
  );
};

export default ChannelsWithGame;
