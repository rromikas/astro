import React from "react";
import { levels } from "../../../data/data";
const Level = ({ level, exp }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "70px",
        width: "70px",
        position: "relative",
      }}
    >
      level<br></br>
      {level}
      <svg
        style={{ position: "absolute", top: 0, left: 0 }}
        width="70"
        height="70"
        viewBox="0 0 190 190"
        fill="none"
        strokeWidth="10px"
      >
        <circle
          stroke="rgba(36,38,39,0.36)"
          cx="95"
          cy="95"
          r="90"
          transform="rotate(-90, 95, 95)"
        />
        <circle
          cx="95"
          cy="95"
          r="90"
          stroke="white"
          transform="rotate(-90, 95, 95)"
          strokeDasharray={`${(exp / levels[level + 1]) * 531}px`}
        />
      </svg>
    </div>
  );
};

export default Level;
