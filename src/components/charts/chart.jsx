import React from "react";
const Chart = ({ data }) => {
  return (
    <div className="container-fluid pt-4 px-4">
      <div className="row no-gutters lead mb-4 pl-4 justify-content-center">
        {data.title}
      </div>
      <div className="row">
        <div className="col-auto">
          {data.items.map((x, i) => {
            return (
              <div key={`charads-${i}`} style={{ height: "37px" }}>
                <div className="w-100 justify-content-center d-flex">
                  {x.image ? (
                    <div style={{ width: "30px", height: "30px" }}>
                      <img
                        alt={`chart-item-${i}`}
                        src={x.image}
                        className="img-fluid"
                      ></img>
                    </div>
                  ) : (
                    <div className="lead">{x.name}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="col">
          {data.items.map((x, i) => {
            return (
              <div className={`d-flex`} key={`fdsdfdsg-${i}`}>
                <div
                  className={`w-${(i + 1) * 20} `}
                  style={{
                    height: "37px",
                    paddingBottom: "5px",
                    borderRight:
                      i === data.items.length - 1 ? "2px solid white" : "none",
                  }}
                >
                  <div
                    className={`w-100 bg-primary h-100 d-flex align-items-center justify-content-center`}
                  >
                    {(i + 1) * 19}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="col" style={{ borderTop: "2px solid white" }}>
            <div
              className={`w-${
                data.items.length * 20
              } d-flex justify-content-between`}
            >
              <div>{data.units}</div>
              <div>{76}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
