import React, { useState } from "react";
import { FaCaretDown, FaAutoprefixer } from "react-icons/fa";
const DropDown = ({ items, current, show, open, place }) => {
  const [curr, setCurr] = useState(current);
  return (
    <div
      className="select-disable d-flex align-items-center"
      style={{ position: "relative", height: "100%" }}
      onClick={open}
    >
      {curr}
      <FaCaretDown fontSize="18px"></FaCaretDown>
      <div
        className="drdwn-menu"
        style={{
          display: show ? "block" : "none",
          left: place === "right" ? 0 : "auto",
          right: place === "left" ? 0 : "auto",
        }}
      >
        {items.map((x) => {
          return <div onClick={() => setCurr(x)}>{x}</div>;
        })}
      </div>
    </div>
  );
};

export default DropDown;
