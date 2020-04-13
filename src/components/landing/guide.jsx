import React from "react";

const Guide = ({ name, callback = () => {}, status }) => {
  return (
    <section>
      <div
        className="p-5 mb-2 newish convex-1"
        style={{
          cursor: "pointer",
          fontSize: "30px",
          fontWeight: "700",
          borderRadius: "30px",
        }}
        onClick={callback}
      >
        <div className="p-5 convex-1">
          <div
            className="p-5 concave-1"
            style={{ fontFamily: "League Spartan" }}
          >
            {name}
          </div>
        </div>
      </div>
      {status ? (
        <p
          className="p-3"
          style={{ borderRadius: "30px", textAlign: "center" }}
          onClick={callback}
        >
          {status}
        </p>
      ) : (
        ""
      )}
    </section>
  );
};

export default Guide;
