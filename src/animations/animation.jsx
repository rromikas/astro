import React, { useState } from "react";
import { Spring, animated, config } from "react-spring/renderprops";
import paths from "./paths";
import { interpolate } from "flubber";

const Animation = () => {
  const [pinger, ping] = useState(1);
  console.log(pinger);
  const interpolator = interpolate(
    paths["discord"],
    paths[`discord${pinger < 5 ? (pinger >= 3 ? "-right" : "-left") : ""}`]
  );
  return (
    <svg width="440" height="300" viewBox="0 0 440 320">
      <Spring
        config={{ delay: 1000, friction: 20 }}
        reset
        native
        from={{
          t: pinger % 2 === 0 ? 1 : 0
        }}
        to={{ t: pinger % 2 === 0 ? 0 : 1 }}
        onRest={() => ping((pinger % 6) + 1)}
      >
        {({ t }) => (
          <animated.path d={t.interpolate(interpolator)} fill={"WHITE"} />
        )}
      </Spring>
    </svg>
  );
};

export default Animation;
