import React, { useState, useEffect } from "react";
import sample from "./sample.jpg";
import Channels from "../dashboard/server/channels";
import Commands from "../dashboard/server/commands";
import Scoreboard from "../dashboard/stats/scoreboard";
import { emojis, commands, users } from "../../data/data";
import Chart from "../charts/chart";
import AutoRoles from "../dashboard/server/autoroles";
import AutoMessages from "../dashboard/server/automessages";
import Prefix from "../dashboard/server/prefix";
import { uid } from "react-uid";
import case1 from "./useCases/1.jpg";
import case2 from "./useCases/2.jpg";
import case3 from "./useCases/3.jpg";
import case4 from "./useCases/4.jpg";
import case6 from "./useCases/6.jpg";
import case7 from "./useCases/7.jpg";
import case8 from "./useCases/8.jpg";
import case10 from "./useCases/10.jpg";
import case11 from "./useCases/11.jpg";
import case12 from "./useCases/12.jpg";
import case13 from "./useCases/13.jpg";

const useCaseImages = [
  case7,
  case8,
  case10,
  case13,
  case11,
  case12,
  case1,
  case2,
  case3,
  case4,
  case6,
];

const webF = [
  <Commands
    prefix="!"
    preview
    commands={[
      { name: "warn", enabled: true },
      { name: "mute", enabled: true },
      { name: "ban", enabled: false },
      { name: "kick", enabled: false },
      { name: "unmute", enabled: true },
      { name: "role", enabled: false },
    ]}
  ></Commands>,
  <Channels
    preview
    channels={[
      { name: "Voice", ignore: false },
      { name: "General", ignore: true },
      { name: "Music", ignore: false },
    ]}
  ></Channels>,
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
  <AutoRoles
    rolesData={{
      autoroles: [
        { min_lvl: 1, role_id: 2 },
        { min_lvl: 10, role_id: 1 },
        { min_lvl: 5, role_id: 3 },
      ],
      roles: [
        { id: -1, name: "select" },
        { id: 1, name: "admin" },
        { id: 2, name: "member" },
        { id: 3, name: "fan" },
      ],
    }}
  ></AutoRoles>,
  <AutoMessages
    server={{ farewell: "Goodbye, {user}", greeting: "Halo, {user}" }}
  ></AutoMessages>,
  <Scoreboard users={users}></Scoreboard>,
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
  "Set auto roles",
  "Set auto messages",
  "Enable/disable channels bot is active on",
  "Enable/disable commands",
  "Set commands prefix",
  "Create emojis fast",
];

function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
}

const Landing = () => {
  const [webOpacity, setWebOpacity] = useState(1);
  const [discordOpacity, setDiscordOpacity] = useState(1);
  const [webFeature, setWebFeature] = useState(0);
  const [caseImage, setCaseImage] = useState(0);
  useEffect(() => {
    const slider = setTimeout(async () => {
      setWebOpacity(0);
      await sleep(1000);
      setWebFeature((webFeature + 1) % webF.length);
      await sleep(100);
      setWebOpacity(1);
    }, 5000);
    return () => clearTimeout(slider);
  }, [webFeature]);

  useEffect(() => {
    const slider = setTimeout(async () => {
      setDiscordOpacity(0);
      await sleep(1000);
      setCaseImage((caseImage + 1) % useCaseImages.length);
      await sleep(300);
      setDiscordOpacity(1);
    }, 5000);
    return () => clearTimeout(slider);
  }, [caseImage]);
  return (
    <div
      className="px-4 container-fluid"
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
            <div className="col-md-6 col-lg-6 col-12 pr-3 mt-3">
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
                      key={uid(x)}
                      className="col-auto px-4 py-2 m-2 convex-2"
                      style={{ borderRadius: "50px" }}
                    >
                      {x}
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-12 d-flex align-items-center mt-4 mt-md-0"
              style={{ height: "355px" }}
            >
              <div
                className="w-100 p-3 d-flex justify-content-center"
                style={{ borderRadius: "15px" }}
              >
                <img
                  src={useCaseImages[caseImage]}
                  style={{
                    borderRadius: "15px",
                    opacity: discordOpacity,
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
            <div className="col-md-6 col-lg-6 col-12 pr-3">
              <div className="row no-gutters">
                <div
                  className="col-auto py-2 m-2 lead"
                  style={{ borderRadius: "50px" }}
                >
                  On Website
                </div>
              </div>
              <div className="row no-gutters">
                {websiteFeatures.map((x) => {
                  return (
                    <div
                      key={uid(x)}
                      className="col-auto px-4 py-2 m-2 convex-2"
                      style={{ borderRadius: "50px" }}
                    >
                      {x}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-12 d-flex align-items-center mt-4 mt-md-0">
              <div
                className="px-4 py-3 convex-2"
                style={{
                  borderRadius: "50px",
                  height: "300px",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    transition: "opacity 1s",
                    opacity: webOpacity,
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
