import React, { useState, useEffect } from "react";
import Server from "./server/server";
import Navbar from "./navbar";
import Users from "./users/users";
import Stats from "./stats/stats";
import Appearance from "./appearance/appearance";
import * as Api from "../../api/requests";
import { connect } from "react-redux";

const Dashboard = (props) => {
  const token = props.user.token;
  // const token = "5nYrFjAif5x5E4VT6bRbfJuv2jc80e";
  const serverId = props.match.params.serverId;

  const [main, setMain] = useState("server");
  const [server, setServer] = useState({
    loading: true,
    id: serverId ? serverId : "0000",
    name: "",
    prefix: "",
    greeting: "",
    farewell: "",
  });
  const [channels, setChannels] = useState([]);
  const [commands, setCommands] = useState([]);
  const [roles, setRoles] = useState({
    roles: [],
    autoroles: [],
  });
  const [users, setUsers] = useState({ loaded: false, items: [] });
  const [emojis, setEmojis] = useState([]);
  const [stats, setStats] = useState({
    emojis: [],
    commands: [],
    users: [],
    loaded: false,
  });

  useEffect(() => {
    if (token) {
      if (main === "server" && !server.loaded) {
        Api.GetGuild(token, serverId, (res) => {
          console.log("Server info response", res);
          res.loading = false;
          res.farewell = res.farewell ? res.farewell : "";
          res.greeting = res.greeting ? res.greeting : "";

          setServer((s) => Object.assign({}, s, res));
        });

        Api.GetAutoRoles(token, serverId, (res) => {
          console.log("AUTOROLES RESPOSNE RES", res);
          Api.GetRoles(token, serverId, (res1) => {
            console.log("ROLES response res1", res1);
            if (res1.error) {
              setServer((s) =>
                Object.assign({}, s, {
                  error: res.error ? res.error : res1.error,
                })
              );
            } else {
              setRoles({ roles: res1, autoroles: res.error ? [] : res });
            }
          });
        });

        Api.GetChannels(token, serverId, (res) => {
          console.log("Channels response", res);
          if (res.error) {
            setServer((s) => Object.assign({}, s, { error: res.error }));
          } else {
            setChannels(res);
          }
        });

        Api.GetCommands(token, serverId, (res) => {
          console.log("Commands response main", res);
          if (res.error) {
            setServer((s) => Object.assign({}, s, { error: res.error }));
          } else {
            setCommands(res);
          }
        });
      } else if (main === "users" && !users.loaded) {
        Api.GetMembers(token, serverId, (res) => {
          console.log("Memebers response", res);
          if (res.error) {
            setServer((s) => Object.assign({}, s, { error: res.error }));
          } else {
            setUsers((u) => Object.assign({}, u, { items: res, loaded: true }));
          }
        });
      } else if (main === "stats" && !stats.loaded) {
        let emojis = [];
        let cmds = [];
        console.log("Stats requested");
        Api.GetMembers(token, serverId, (res) => {
          console.log("Memebers response", res);
          if (res.error) {
            setServer((s) => Object.assign({}, s, { error: res.error }));
          } else {
            setStats((s) => Object.assign({}, s, { users: res }));
          }
        });
        Api.GetEmojis(token, serverId, (res) => {
          console.log("EMOJIS resposne", res);
          Api.GetCommands(token, serverId, (res1) => {
            console.log("commands repsonse res1", res1);
            emojis = res === "" ? [] : emojis;
            cmds = res1;
            if (res.error || res1.error) {
              setServer((s) =>
                Object.assign({}, s, {
                  error: res.error ? res.error : res1.error,
                })
              );
            } else {
              setStats((st) =>
                Object.assign({}, st, { emojis: emojis, commands: cmds })
              );
            }
          });
        });
      }
    } else {
      setServer((s) =>
        Object.assign({}, s, { loading: false, error: "You need to login" })
      );
    }
  }, [main]);

  return (
    <div
      className="px-3"
      style={{ maxWidth: "1300px", minHeight: "100%", margin: "auto" }}
    >
      <Navbar setMain={setMain} main={main} server={server}></Navbar>
      {main === "server" ? (
        <Server
          server={server}
          setServer={(update) => setServer((s) => Object.assign({}, s, update))}
          channels={channels}
          commands={commands}
          roles={roles}
          messages={[server.greeting, server.farewell]}
          updateMessages={() => {
            setServer((s) => Object.assign({}, s, { loading: true }));
            console.log("SERver before sending update", server);
            Api.UpdateGuildInfo(token, serverId, server, (res) => {
              console.log("Response after messages update", res);
              setServer((s) => Object.assign({}, s, { loading: false }));
            });
          }}
          prefix={server.prefix}
          setPrefix={(prefix) =>
            setServer((s) => Object.assign({}, s, { prefix }))
          }
          savePrefix={() => {
            console.log("SAVE PREFIX FIRE");
            setServer((s) => Object.assign({}, s, { loading: true }));
            Api.UpdateGuildInfo(token, serverId, server, (res) => {
              console.log("Response after prefix update", res);
              setServer((s) => Object.assign({}, s, { loading: false }));
            });
          }}
          setCommands={setCommands}
          setChannels={setChannels}
          setRoles={setRoles}
          createRole={(role) => {
            setServer((s) => Object.assign({}, s, { loading: true }));
            console.log("creat autorole nauja role: ", role);
            Api.CreateAutorole(token, serverId, role, (res) => {
              console.log("Response after autorole update", res);
              setServer((s) => Object.assign({}, s, { loading: false }));
            });
          }}
          updateRole={(role) => {
            setServer((s) => Object.assign({}, s, { loading: true }));
            Api.UpdateAutorole(token, serverId, role, (res) => {
              console.log("Response after autorole update", res);
              setServer((s) => Object.assign({}, s, { loading: false }));
            });
          }}
          updateChannel={(updatedChannel) => {
            setChannels((chnls) => {
              let arr = [...chnls];
              return arr.map((a) =>
                a.id === updatedChannel.id
                  ? Object.assign({}, a, updatedChannel)
                  : a
              );
            });
            setServer((s) => Object.assign({}, s, { loading: true }));
            console.log("CHANELL BEFORE UPDAING", updatedChannel);
            Api.UpdateChannel(token, serverId, updatedChannel, (res) => {
              console.log("Response after updating channel: ", res);
              setServer((s) => Object.assign({}, s, { loading: false }));
            });
          }}
          updateCommand={(updatedCommand) => {
            setCommands((cmds) => {
              let arr = [...cmds];
              return arr.map((a) =>
                a.name === updatedCommand.name
                  ? Object.assign({}, a, { enabled: updatedCommand.enabled })
                  : a
              );
            });
            setServer((s) => Object.assign({}, s, { loading: true }));
            console.log(
              "UPDATED COMMAND BEFORE SENDING UPDATE",
              updatedCommand
            );
            Api.UpdateCommands(token, serverId, updatedCommand, (res) => {
              console.log("Response after updating command", res);
              setServer((s) => Object.assign({}, s, { loading: false }));
            });
          }}
        ></Server>
      ) : main === "users" ? (
        <Users users={users.items}></Users>
      ) : main === "stats" ? (
        <Stats
          commands={stats.commands}
          emojis={stats.emojis}
          users={stats.users}
        ></Stats>
      ) : main === "appearance" ? (
        <Appearance></Appearance>
      ) : (
        ""
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state,
  };
}

export default connect(mapStateToProps)(Dashboard);
