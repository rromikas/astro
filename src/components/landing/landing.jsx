import React, { useState, useEffect } from "react";
import sample from "./sample.jpg";
import Channels from "../dashboard/server/channels";
import Commands from "../dashboard/server/commands";
import Scoreboard from "../dashboard/stats/scoreboard";
import { emojis, commands } from "../../data/data";
import Chart from "../charts/chart";
import AutoRoles from "../dashboard/server/autoroles";
import AutoMessages from "../dashboard/server/automessages";
import Prefix from "../dashboard/server/prefix";
import history from "../../routing/history";
const webF = [
  <Commands prefix="!" preview></Commands>,
  <Channels preview></Channels>,
  <Chart
    data={{
      title: "Top Emojis",
      units: "times",
      items: emojis.slice(0, 4),
    }}
  ></Chart>,
  <Chart
    data={{
      title: "Top Commands",
      units: "times",
      items: commands.slice(0, 4),
    }}
  ></Chart>,
  <AutoRoles></AutoRoles>,
  <AutoMessages></AutoMessages>,
  <Scoreboard></Scoreboard>,
  <Prefix prefix="!"></Prefix>,
];
const botFeatures = [
  "Gamify server with levels",
  "Warn, mute, kick, ban users",
  "Give roles",
  "Play music",
  "Search in Wikipedia",
  "Create polls",
];

const websiteFeatures = [
  "Leaderboard",
  "Top commands",
  "Top emojis",
  "Give roles, warn, ban, mute, kick users",
  "Set auto roles",
  "Set auto messages",
  "Enable/disable channels bot is active on",
  "Enable/disable commands",
  "Set commands prefix",
  "Create emojis fast",
  "Customize user rank card",
];

function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
}

const Landing = () => {
  const [opacity, setOpacity] = useState(1);
  const [webFeature, setWebFeature] = useState(0);
  useEffect(() => {
    const slider = setTimeout(async () => {
      setOpacity(0);
      await sleep(1000);
      setWebFeature((webFeature + 1) % webF.length);
      setOpacity(1);
    }, 5000);
    return () => clearTimeout(slider);
  }, [webFeature]);
  return (
    <div
      className="px-4 container-fluid mt-4 mt-md-0"
      style={{ maxWidth: "1300px", minHeight: "100%", margin: "auto" }}
    >
      <div className="row no-gutters mb-5 justify-content-center">
        <div
          className="col-auto convex-2 px-5 py-3 lead"
          style={{ borderRadius: "50px", cursor: "pointer" }}
          onClick={() => {
            window.location =
              "https://discordapp.com/oauth2/authorize?client_id=683749582705786882&scope=bot&permissions=2146958591";
          }}
        >
          Connect to your server
        </div>
      </div>
      <div className="row no-gutters pb-3">
        <div className="col-12 mb-3">
          <div className="row no-gutters">
            <div className="col-md-6 col-lg-8 col-12 pr-3">
              <div className="row no-gutters">
                <div
                  className="col-auto py-2 m-2 lead"
                  style={{ borderRadius: "50px" }}
                >
                  Bot Features
                </div>
              </div>
              <div className="row no-gutters">
                {botFeatures.map((x) => {
                  return (
                    <div
                      className="col-auto px-4 py-2 m-2 convex-2"
                      style={{ borderRadius: "50px" }}
                    >
                      {x}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12 d-flex align-items-center mt-4 mt-md-0">
              <div
                className="w-100 p-3 concave-2 d-flex justify-content-center"
                style={{ borderRadius: "50px" }}
              >
                <img
                  src={sample}
                  style={{
                    borderRadius: "50px",
                    opacity: opacity,
                    transition: "opacity 1s",
                  }}
                  className="img-fluid"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row no-gutters">
            <div className="col-md-6 col-lg-8 col-12 pr-3">
              <div className="row no-gutters">
                <div
                  className="col-auto py-2 m-2 lead"
                  style={{ borderRadius: "50px" }}
                  onClick={() => history.push({ pathname: "/dashboard" })}
                >
                  On Website (Go to dashboard)
                </div>
              </div>
              <div className="row no-gutters">
                {websiteFeatures.map((x) => {
                  return (
                    <div
                      className="col-auto px-4 py-2 m-2 convex-2"
                      style={{ borderRadius: "50px" }}
                    >
                      {x}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12 d-flex align-items-center mt-4 mt-md-0">
              <div
                className="px-4 py-3 concave-2"
                style={{
                  borderRadius: "50px",
                  height: "300px",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    transition: "opacity 1s",
                    opacity: opacity,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  {webF[webFeature]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
