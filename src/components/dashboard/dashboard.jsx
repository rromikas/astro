import React, { useState, useEffect } from "react";
import Server from "./server/server";
import Navbar from "./navbar";
import Users from "./users/users";
import Stats from "./stats/stats";
import Appearance from "./appearance/appearance";
import * as Api from "../../api/requests";
import { connect } from "react-redux";

const Dashboard = (props) => {
  const token =
    process.env.NODE_ENV === "production"
      ? props.user.token
      : "5nYrFjAif5x5E4VT6bRbfJuv2jc80e";
  const serverId = props.match.params.serverId;

  const [main, setMain] = useState("server");
  const [server, setServer] = useState({
    id: serverId ? serverId : "0000",
    name: "",
    prefix: "",
    greeting: "",
    farewell: "",
  });
  const [loadedContent, setLoadedContent] = useState(0);
  const [channels, setChannels] = useState([]);
  const [commands, setCommands] = useState([]);
  const [roles, setRoles] = useState({
    roles: [],
    autoroles: [],
  });
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({
    emojis: [],
    commands: [],
    users: [],
  });

  useEffect(() => {
    if (token) {
      Api.GetGuild(token, serverId, (res) => {
        res.farewell = res.farewell ? res.farewell : "";
        res.greeting = res.greeting ? res.greeting : "";
        setServer((s) => Object.assign({}, s, res));
        setLoadedContent((lc) => lc + 1);
      });

      Api.GetAutoRoles(token, serverId, (res) => {
        Api.GetRoles(token, serverId, (res1) => {
          if (res1.error) {
            setServer((s) =>
              Object.assign({}, s, {
                error: res.error ? res.error : res1.error,
              })
            );
          } else {
            setRoles({ roles: res1, autoroles: res.error ? [] : res });
          }
          setLoadedContent((lc) => lc + 1);
        });
      });

      Api.GetChannels(token, serverId, (res) => {
        if (res.error) {
          setServer((s) => Object.assign({}, s, { error: res.error }));
        } else {
          setChannels(res);
        }
        setLoadedContent((lc) => lc + 1);
      });

      Api.GetCommands(token, serverId, (res) => {
        if (res.error) {
          setServer((s) => Object.assign({}, s, { error: res.error }));
        } else {
          setCommands(res);
        }
        setLoadedContent((lc) => lc + 1);
      });

      Api.GetMembers(token, serverId, (res) => {
        if (res.error) {
          setServer((s) => Object.assign({}, s, { error: res.error }));
        } else {
          setUsers(res);
        }
        setLoadedContent((lc) => lc + 1);
      });

      Api.GetEmojis(token, serverId, (res) => {
        let emojis = [],
          cmds = [];
        Api.GetCommands(token, serverId, (res1) => {
          cmds = res1;
          emojis = res !== "" ? res : [];
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
          setLoadedContent((lc) => lc + 1);
        });
      });
    } else {
      setServer((s) =>
        Object.assign({}, s, { loading: false, error: "You need to login" })
      );
    }
  }, []);

  return (
    <div
      className="px-3"
      style={{ maxWidth: "1300px", minHeight: "100%", margin: "auto" }}
    >
      <Navbar
        setMain={setMain}
        main={main}
        server={server}
        loadedContent={loadedContent}
      ></Navbar>
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
            Api.UpdateGuildInfo(token, serverId, server, (res) => {
              setServer((s) => Object.assign({}, s, { loading: false }));
            });
          }}
          prefix={server.prefix}
          setPrefix={(prefix) =>
            setServer((s) => Object.assign({}, s, { prefix }))
          }
          savePrefix={() => {
            setServer((s) => Object.assign({}, s, { loading: true }));
            Api.UpdateGuildInfo(token, serverId, server, (res) => {
              setServer((s) => Object.assign({}, s, { loading: false }));
            });
          }}
          setCommands={setCommands}
          setChannels={setChannels}
          setRoles={setRoles}
          createRole={(role) => {
            setServer((s) => Object.assign({}, s, { loading: true }));
            Api.CreateAutorole(token, serverId, role, (res) => {
              setServer((s) => Object.assign({}, s, { loading: false }));
            });
          }}
          updateRole={(role) => {
            setServer((s) => Object.assign({}, s, { loading: true }));
            Api.UpdateAutorole(token, serverId, role, (res) => {
              setServer((s) => Object.assign({}, s, { loading: false }));
            });
          }}
          deleteRole={(role) => {
            setServer((s) => Object.assign({}, s, { loading: true }));
            Api.DeleteRole(token, serverId, role, (res) => {
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
            Api.UpdateChannel(token, serverId, updatedChannel, (res) => {
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

            Api.UpdateCommands(token, serverId, updatedCommand, (res) => {
              setServer((s) => Object.assign({}, s, { loading: false }));
            });
          }}
        ></Server>
      ) : main === "users" ? (
        <Users users={users}></Users>
      ) : main === "stats" ? (
        <Stats
          commands={stats.commands}
          emojis={stats.emojis}
          users={users}
        ></Stats>
      ) : main === "appearance" ? (
        <Appearance
          deleteEmoji={(emoji) => {
            Api.DeleteEmoji(token, serverId, emoji, (res) => {});
          }}
          createEmoji={(emoji, fn) => {
            Api.CreateEmoji(token, serverId, emoji, (res) => {
              fn(res.data);
            });
          }}
          emojis={stats.emojis}
          setEmojis={(emojis) =>
            setStats((s) => Object.assign({}, s, { emojis: emojis }))
          }
        ></Appearance>
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
