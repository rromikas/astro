import React, { useRef, useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

const Chart = ({ data }) => {
  const maxValue = Math.max(...data.items.map((x) => x.uses));
  const sortedItems = data.items.sort((a, b) =>
    a.uses > b.uses ? -1 : a.uses < b.uses ? 1 : 0
  );
  const scrollbar = useRef(null);
  useEffect(() => {
    scrollbar.current.updateScroll();
  }, []);

  return (
    <div className="container-fluid pt-4 pb-3 px-4">
      <div className="row no-gutters lead mb-3 justify-content-center">
        {data.title}
      </div>
      <PerfectScrollbar
        ref={scrollbar}
        options={{
          wheelSpeed: 0.4,
          wheelPropagation: false,
          handlers: ["keyboard", "wheel", "touch"],
        }}
        className={`col-11 col-lg-10 mx-auto h-78 mr-1`}
        style={{ minWidth: "245px" }}
      >
        {sortedItems.length ? (
          <div className="row">
            <div className="col-auto">
              {sortedItems.map((x, i) => {
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
                        <div>{x.name}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col">
              {sortedItems.map((x, i) => {
                return (
                  <div className={`d-flex`} key={`fdsdfdsg-${i}`}>
                    <div
                      className={`w-${Math.floor((x.uses * 100) / maxValue)}`}
                      style={{
                        height: "37px",
                        paddingBottom: "5px",
                      }}
                    >
                      <div
                        className={`w-100 enbl-btn h-100 px-2 d-flex convex-2 align-items-center justify-content-center`}
                        style={{ color: "black", borderRadius: "8px" }}
                      >
                        {x.uses}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="h3 mb-2 w-100 h-100 d-flex align-items-center justify-content-center">
            No data
          </div>
        )}
      </PerfectScrollbar>
    </div>
  );
};

export default Chart;
