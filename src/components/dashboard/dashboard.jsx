import React, { useState } from "react";
import users from "../../images/users";
import { FaPen, FaCheck } from "react-icons/fa";
import Chart from "../charts/chart";
import emojis from "../../images/emojis";
const Dashboard = () => {
  const [start, setStart] = useState(0);
  const [move, setMove] = useState([0, 0]);
  const [letMove, setLetMove] = useState(false);
  const [prefix, setPrefix] = useState("!");
  const [edit, setEdit] = useState(false);
  function onMU(e, chnl) {
    setLetMove(false);
    let parent = e.currentTarget.parentNode;
    let pos = parent.getBoundingClientRect();
    let target = e.currentTarget.getBoundingClientRect();
    if (
      Math.abs(move[1]) >
      pos.right - pos.left - Math.abs(move[1]) - target.right + target.left
    ) {
      if (parent.style.justifyContent === "flex-start") {
        parent.style.justifyContent = "flex-end";
      } else {
        parent.style.justifyContent = "flex-start";
      }
      setMove([chnl, 0]);
    } else {
      setMove([chnl, 0]);
    }

    document.body.classList.remove("selectDisable");
  }

  function onML() {
    setLetMove(false);
    setMove([move[0], 0]);
    document.body.classList.remove("selectDisable");
  }

  function onMD(e, chnl) {
    setStart(e.screenX);
    setLetMove(true);
    document.body.classList.add("selectDisable");
  }

  function onMM(e, chnl) {
    if (letMove) {
      setMove([chnl, move[1] + e.screenX - start]);
      setStart(e.screenX);
    }
  }
  return (
    <div className="container-fluid mh-100" style={{ maxWidth: "1300px" }}>
      <div className="row no-gutters justify-content-between">
        <div
          className="p-2 col-lg-4 col-md-8 col-sm-8 col-12"
          style={{ height: "300px" }}
        >
          <div className="pnl convex-1 row p-2 no-gutters justify-content-between newish">
            <div className="col-12 lead py-3 text-center">Channels</div>
            <div className="col-6 h-100 p-2">
              <div className="h-24 p-2 lead d-flex align-items-center">
                Voice
              </div>
              <div className="h-24 p-2 lead d-flex align-items-center">
                General
              </div>
              <div className="h-24 p-2 lead d-flex align-items-center">
                Music
              </div>
            </div>
            <div className="col-3 h-100 p-2">
              <div className="row h-24 p-2">
                <div
                  className="pnl concave-2"
                  style={{
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    onMouseDown={(e) => onMD(e, 1)}
                    onMouseUp={(e) => onMU(e, 1)}
                    onMouseMove={(e) => onMM(e, 1)}
                    onMouseLeave={onML}
                    className="pnl w-65 convex-2"
                    style={{
                      background: "rgb(165, 250, 251)",

                      transform: `translateX(${move[0] === 1 ? move[1] : 0}px)`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="row h-24 p-2">
                <div
                  className="pnl concave-2"
                  style={{ justifyContent: "flex-end" }}
                >
                  <div
                    onMouseDown={(e) => onMD(e, 2)}
                    onMouseUp={(e) => onMU(e, 2)}
                    onMouseMove={(e) => onMM(e, 2)}
                    onMouseLeave={onML}
                    className="pnl w-65 convex-2"
                    style={{
                      background: "rgb(165, 250, 251)",
                      transform: `translateX(${move[0] === 2 ? move[1] : 0}px)`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="row h-24 p-2">
                <div
                  className="pnl concave-2"
                  style={{ justifyContent: "flex-start" }}
                >
                  <div
                    onMouseDown={(e) => onMD(e, 3)}
                    onMouseUp={(e) => onMU(e, 3)}
                    onMouseMove={(e) => onMM(e, 3)}
                    onMouseLeave={onML}
                    className="pnl w-65 convex-2"
                    style={{
                      background: "rgb(165, 250, 251)",
                      transform: `translateX(${move[0] === 3 ? move[1] : 0}px)`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-lg-3 col-md-4 col-sm-4 col-8"
          style={{ height: "300px", maxWidth: "265px" }}
        >
          <div className="row no-gutters h-100 p-2">
            <div className="col-md-12 h-30 p-2">
              <div className="newish convex-1 pnl align-items-center justify-content-center lead">
                Prefix
              </div>
            </div>
            <div className="col-md-12 h-70 p-2">
              <div className="concave-1 pnl align-items-center justify-content-center display-4 newish">
                <FaPen
                  onClick={(e) => {
                    setEdit(true);
                    e.currentTarget.nextSibling.nextSibling.focus();
                  }}
                  style={{
                    position: "absolute",
                    top: "30px",
                    right: "30px",
                    fontSize: "20px",
                    color: "white",
                    display: edit ? "none" : "block",
                  }}
                ></FaPen>
                <FaCheck
                  onClick={() => setEdit(false)}
                  style={{
                    position: "absolute",
                    top: "30px",
                    right: "30px",
                    fontSize: "20px",
                    color: "white",
                    display: edit ? "block" : "none",
                  }}
                ></FaCheck>

                <input
                  onBlur={() => setEdit(false)}
                  onFocus={() => setEdit(true)}
                  className="prfx-inpt selectDisable"
                  type="text"
                  value={prefix}
                  onChange={(e) => setPrefix(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5 col-sm-12 col-12">
          <div
            className="row justify-content-center"
            style={{ height: "300px" }}
          >
            <div className="col-lg-12 col-sm-10 col-12">
              <div className="row h-100 no-gutters p-2">
                <div className="col-4 h-100 no-gutters">
                  <div className="col-12 h-33 p-2">
                    <div className="newish pnl convex-1 justify-content-center align-items-center">
                      <div style={{ height: "50px", width: "50px" }}>
                        <img
                          alt="user"
                          src={users[2]}
                          className="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 h-33 p-2">
                    <div className="newish pnl convex-1 justify-content-center align-items-center">
                      <div style={{ height: "50px", width: "50px" }}>
                        <img
                          alt="user"
                          src={users[2]}
                          className="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 h-33 p-2">
                    <div className="newish pnl convex-1 justify-content-center align-items-center">
                      <div style={{ height: "50px", width: "50px" }}>
                        <img
                          alt="user"
                          src={users[2]}
                          className="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 h-100 no-gutters">
                  <div className="col-12 h-33 p-2">
                    <div className="newish pnl convex-1 justify-content-center align-items-center">
                      <div style={{ height: "50px", width: "50px" }}>
                        <img
                          alt="user"
                          src={users[1]}
                          className="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 h-33 p-2">
                    <div className="newish pnl convex-1 justify-content-center align-items-center">
                      <div style={{ height: "50px", width: "50px" }}>
                        <img
                          alt="user"
                          src={users[1]}
                          className="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 h-33 p-2">
                    <div className="newish pnl convex-1 justify-content-center align-items-center">
                      <div style={{ height: "50px", width: "50px" }}>
                        <img
                          alt="user"
                          src={users[1]}
                          className="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-4 h-100 no-gutters">
                  <div className="col-12 h-33 p-2">
                    <div className="newish pnl convex-1 justify-content-center align-items-center">
                      <div style={{ height: "50px", width: "50px" }}>
                        <img
                          alt="user"
                          src={users[0]}
                          className="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 h-33 p-2">
                    <div className="newish pnl convex-1 justify-content-center align-items-center">
                      <div style={{ height: "50px", width: "50px" }}>
                        <img
                          alt="user"
                          src={users[0]}
                          className="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 h-33 p-2">
                    <div className="newish pnl convex-1 justify-content-center align-items-center">
                      <div style={{ height: "50px", width: "50px" }}>
                        <img
                          alt="user"
                          src={users[0]}
                          className="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row no-gutters">
        <div
          className="col-12 col-md-6 pl-2 pr-3 pt-3"
          style={{ height: "300px" }}
        >
          <div className="pnl convex-1 newish">
            <Chart
              data={{
                title: "Top Emojis",
                units: "times",
                items: [
                  { image: emojis[0] },
                  { image: emojis[1] },
                  { image: emojis[2] },
                  { image: emojis[3] },
                ],
              }}
            ></Chart>
          </div>
        </div>
        <div
          className="col-12 col-md-6 pl-3 pr-2 pt-3"
          style={{ height: "300px" }}
        >
          <div className="pnl convex-1 newish">
            <Chart
              data={{
                title: "Top Commands",
                units: "times",
                items: [
                  { name: "!mute" },
                  { name: "!ban" },
                  { name: "!kick" },
                  { name: "!role" },
                ],
              }}
            ></Chart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
