import React, { useState, useRef, useEffect } from "react";
import UserCard from "./usercard";
import { uid } from "react-uid";
const UserInfo = () => {
  const card = useRef(null);
  const uploadBg = useRef(null);
  const urls = [
    "https://i.ibb.co/zs7C1gH/Screenshot-3.jpg",
    "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.unsplash.com/photo-1554310603-d39d43033735?ixlib=rb-1.2.1&w=1000&q=80",
    "https://images.pexels.com/photos/1434608/pexels-photo-1434608.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-1.2.1&w=1000&q=80",
  ];
  const colors = [
    "rgb(237, 147, 185)",
    "#0371d6",
    "#32c94e",
    "#ff9303",
    "gray",
  ];
  const [mainBg, setmainBg] = useState(urls[0]);
  const [mainColor, setMainColor] = useState(colors[0]);
  useEffect(() => {
    console.log("svg card", card.current);
  }, []);
  return (
    <div className="pnl convex-1 row no-gutters px-4 py-4 pt-4 h-100">
      <div className="text-center lead col-12 mb-4">User Rank Card</div>
      <div className="col-12 mb-4">
        <div className="d-flex w-100">
          <UserCard
            username="Romas"
            level="5"
            xp={"300/500"}
            rank="86"
            bg={mainBg}
            mainColor={mainColor}
          ></UserCard>
        </div>
      </div>
      <div className="col-12 mb-2">
        <div className="row no-gutters">
          {urls.map((x) => {
            return (
              <div className="col-4 p-1" key={uid(x)}>
                <div
                  onClick={() => setmainBg(x)}
                  className="w-100"
                  style={{
                    border: mainBg === x ? "3px solid white" : "none",
                    height: "50px",
                    backgroundImage: `url(${x})`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            );
          })}
          <div className="col-4 p-1">
            <div
              style={{ cursor: "pointer" }}
              className="p-2 px-4 convex-2 justify-content-center align-items-center pnl"
              onClick={() => {
                uploadBg.current.click();
              }}
            >
              Upload
            </div>
            <input
              ref={uploadBg}
              style={{ display: "none" }}
              type="file"
              text="upload"
              onChange={(e) => {
                const reader = new FileReader();
                reader.addEventListener(
                  "load",
                  function () {
                    setmainBg(reader.result);
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
      <div className="col-12">
        <div className="row no-gutters w-100">
          {colors.map((x) => {
            return (
              <div
                className="col-1 square"
                onClick={() => setMainColor(x)}
                style={{
                  background: x,
                  border: x === mainColor ? "3px solid white" : "none",
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
