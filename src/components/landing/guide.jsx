import React from "react";

const Guide = ({ name, callback = () => {}, status }) => {
  return (
    <section>
      <div
        className="convex-1 p-5 mb-2 newish"
        style={{
          cursor: "pointer",
          fontSize: "30px",
          fontWeight: "700",
          borderRadius: "30px",
        }}
        onClick={callback}
      >
        {name}
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
