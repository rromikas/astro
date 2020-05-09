import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { uid } from "react-uid";
import { Scrollbars } from "react-custom-scrollbars";
const DropDown = ({ items, current, open, place }) => {
  const [curr, setCurr] = useState(current);
  const [show, setShow] = useState(false);
  return (
    <div
      className="d-flex align-items-center"
      style={{ position: "relative", height: "100%" }}
      onClick={() => setShow(!show)}
    >
      {curr}
      <FaCaretDown fontSize="18px"></FaCaretDown>

      <div
        className="drdwn-menu"
        style={{
          width: "150px",
          height: "300px",
          display: show ? "block" : "none",
          left: place === "right" ? 0 : "auto",
          right: place === "left" ? 0 : "auto",
        }}
      >
        <Scrollbars
          hideTracksWhenNotNeeded
          renderTrackHorizontal={(props) => (
            <div {...props} className="track-horizontal" />
          )}
          renderTrackVertical={(props) => (
            <div {...props} className="track-vertical" />
          )}
          renderThumbHorizontal={(props) => (
            <div {...props} className="thumb-horizontal" />
          )}
          renderThumbVertical={(props) => (
            <div {...props} className="thumb-vertical" />
          )}
          renderView={(props) => <div {...props} className="drdwn-menu-view" />}
        >
          {items.map((x) => {
            return (
              <div key={uid(x)} onClick={() => setCurr(x)}>
                {x}
              </div>
            );
          })}
        </Scrollbars>
      </div>
    </div>
  );
};

export default DropDown;
