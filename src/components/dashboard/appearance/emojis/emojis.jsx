import React, { useState, useRef } from "react";
import { getBase64Image } from "../../utilities/htmltocanvas";
import { uid } from "react-uid";
import MoonLoader from "react-spinners/MoonLoader";

const Emojis = ({ createEmoji, deleteEmoji, emojis, setEmojis }) => {
  const [hover, setHover] = useState(-1);
  const [image, setImage] = useState({ isUrl: false, url: "" });
  const [name, setName] = useState("");
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
                key={uid(x)}
                className="col-auto p-1"
                style={{ position: "relative" }}
                onMouseOver={() => {
                  setHover(i);
                }}
                onMouseLeave={() => {
                  setHover(-1);
                }}
              >
                {x.loading ? (
                  <div
                    className="w-100 square d-flex align-items-center justify-content-center"
                    style={{
                      borderRadius: "25px",
                    }}
                  >
                    <MoonLoader size={30} color={"white"} loading={x.loading} />
                  </div>
                ) : (
                  <div
                    className="w-100 square"
                    style={{
                      borderRadius: "25px",
                      backgroundImage: `url(https://cdn.discordapp.com/emojis/${x.id})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                )}

                {hover === i && (
                  <div
                    onClick={() => {
                      deleteEmoji(emojis[i]);
                      let arr = [...emojis];
                      arr.splice(i, 1);
                      setEmojis(arr);
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
                {x.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-12">
        <div className="row no-gutters">
          <div className="col-auto d-flex align-items-center p-1">Url</div>
          <div
            className="concave-2 w-100 px-3 col p-1"
            style={{ height: "40px", borderRadius: "50px" }}
          >
            <input
              value={image.url.substring(0, 45)}
              onChange={(e) => {
                e.persist();
                setImage((i) =>
                  Object.assign({}, i, { isUrl: true, url: e.target.value })
                );
              }}
              className="w-100 px-3"
            ></input>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="d-flex align-items-center p-1">Name</div>
          <div className="col p-1">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="concave-2 w-100 px-3"
              style={{ height: "40px", borderRadius: "50px" }}
            ></input>
          </div>

          <div className="col-3 p-1">
            <div
              onClick={() => {
                if (name.includes(" ")) {
                  alert("Name can not contain spaces");
                } else if (name !== "" && image.url !== "") {
                  if (image.isUrl) {
                    getBase64Image(image.url).then((data) => {
                      if (data.error) {
                        alert(data.error);
                      } else {
                        let arr = [...emojis];
                        arr[arr.length] = { id: -1, loading: true };
                        setEmojis(arr);
                        createEmoji(
                          {
                            name: name,
                            image: data.replace("data:image/png;base64,", ""),
                          },
                          (res) => {
                            let arr = [...emojis];
                            arr[arr.length] = res;
                            setEmojis(arr);
                          }
                        );
                      }
                    });
                  } else {
                    createEmoji(
                      {
                        name: name,
                        image: image.url.replace("data:image/png;base64,", ""),
                      },
                      (res) => {
                        let arr = [...emojis];
                        arr[arr.length] = res;
                        setEmojis(arr);
                      }
                    );
                  }

                  setImage({ isUrl: true, url: "" });
                } else {
                  alert("fill all fields");
                }
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
                    setImage({ isUrl: false, url: reader.result });
                  },
                  false
                );
                let file = e.target.files[0];
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
