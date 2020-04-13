import React from "react";
import Guide from "./guide";
import history from "../../routing/history";
import Animation from "../../animations/animation";
const Landing = () => {
  return (
    <div className="content convex-1">
      <Guide name="CONNECTION MAKER"></Guide>
      <Guide
        name="DASHBORDUKAS"
        callback={() => {
          history.push("/dashboard");
        }}
      ></Guide>

      <Guide name="COMMAND LIST"></Guide>
      <Guide name="BEST LANDING PAGE EVE"></Guide>
    </div>
  );
};

export default Landing;
