import React, { useState, useRef } from "react";
import a from "./samples/a.png";
import b from "./samples/b.png";
import c from "./samples/c.png";
import d from "./samples/d.png";
import e from "./samples/e.png";
import f from "./samples/f.png";
import g from "./samples/g.png";
import h from "./samples/h.png";
import i from "./samples/i.png";
import j from "./samples/j.png";
const Emojis = () => {
  const [emojis, setEmojis] = useState([a, b, c, d, e, f, g, h, i, j]);
  const [hover, setHover] = useState(-1);
  const [url, setUrl] = useState("");
  const upload = useRef(null);
  return (
    <div
      className="convex-1 row no-gutters px-4 py-4 pt-4"
      style={{ borderRadius: "50px" }}
    >
      <div className="col-12 text-center mb-4 lead">Your emojis</div>
      <div className="col-12 mb-4">
        <div className="row no-gutters">
          {emojis.map((x, i) => {
            return (
              <div
                className="col-2 p-1"
                style={{ position: "relative" }}
                onMouseOver={() => {
                  setHover(i);
                }}
                onMouseLeave={() => {
                  setHover(-1);
                }}
              >
                <div
                  className="w-100 square"
                  style={{
                    borderRadius: "25px",
                    backgroundImage: `url(${x})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                {hover === i && (
                  <div
                    onClick={() => {
                      setEmojis((emj) => {
                        let arr = [...emj];
                        arr.splice(i, 1);
                        return arr;
                      });
                    }}
                    className="w-100 h-100"
                    style={{
                      position: "absolute",
                      zIndex: 5,
                      top: 0,
                      left: 0,
                      background: "rgba(0,0,0,0.5)",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 30,
                      fontWeight: "bold",
                    }}
                  >
                    X
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-12">
        <div className="row no-gutters">
          <div className="col-6 p-1">
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="concave-2 w-100 px-3"
              style={{ height: "40px", borderRadius: "50px" }}
            ></input>
          </div>

          <div className="col-3 p-1">
            <div
              onClick={() => {
                setEmojis((emj) => {
                  let arr = [...emj];
                  arr[arr.length] = url;
                  return arr;
                });
                setUrl("");
              }}
              className="w-100 d-flex align-items-center justify-content-center convex-2"
              style={{
                height: "40px",
                borderRadius: "50px",
                cursor: "pointer",
              }}
            >
              create
            </div>
          </div>
          <div className="col-3 p-1">
            <div
              onClick={() => upload.current.click()}
              className="w-100 d-flex align-items-center justify-content-center convex-2"
              style={{
                height: "40px",
                borderRadius: "50px",
                cursor: "pointer",
              }}
            >
              upload
            </div>
            <input
              ref={upload}
              style={{ display: "none" }}
              type="file"
              text="upload"
              onChange={(e) => {
                const reader = new FileReader();
                reader.addEventListener(
                  "load",
                  function () {
                    setEmojis((emj) => {
                      let arr = [...emj];
                      arr[arr.length] = reader.result;
                      return arr;
                    });
                  },
                  false
                );
                let file = e.target.files[0];
                console.log(file);
                if (file) {
                  if (file.type.includes("image")) {
                    if (file.size < 10000000) {
                      if (file.name.length < 40) {
                        reader.readAsDataURL(file);
                      } else {
                        alert("file name is too long");
                      }
                    } else {
                      alert("file is too large");
                    }
                  } else {
                    alert("wrong file type");
                  }
                }
              }}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emojis;
