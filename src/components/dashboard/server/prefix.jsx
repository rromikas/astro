import React, { useState } from "react";
import { FaPen, FaCheck } from "react-icons/fa";
const Prefix = ({ setPrefix, prefix }) => {
  const [edit, setEdit] = useState(false);
  return (
    <div className="row no-gutters h-100" style={{ maxWidth: "270px" }}>
      <div className={`col-md-12 h-30 p-2`}>
        <div className="shn convex-1 pnl align-items-center justify-content-center lead">
          Prefix
        </div>
      </div>
      <div className="col-md-12 h-70 p-2">
        <div className="concave-1 pnl align-items-center justify-content-center display-4 shn">
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
  );
};

export default Prefix;
