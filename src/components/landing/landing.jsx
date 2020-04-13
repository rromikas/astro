import React from "react";
import Guide from "./guide";
import history from "../../routing/history";
import Animation from "../../animations/animation";
const Landing = () => {
  return (
    <div className="content">
      <div>
        <Guide name="Connect Bot"></Guide>
        <Guide
          name="Dashboard"
          callback={() => {
            history.push("/dashboard");
          }}
        ></Guide>
      </div>
      <Guide name="Command list"></Guide>
      <Animation></Animation>
    </div>
  );
};

export default Landing;
