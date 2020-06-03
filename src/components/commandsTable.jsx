import React from "react";

const CommandsTable = () => {
  const commands = [
    {
      name: "!warn '@{username}'",
      description:
        "warn user. When user gathers too much warnings, he is kicked from the server",
    },
    {
      name: "!top members",
      description: "Returns server members sorted by level and experience",
    },
    { name: "!top emojis", description: "Return server emojis sorted by uses" },
    {
      name: "!top commands",
      description: "Return server commands sorted by uses",
    },
    {
      name: "!config prefix {prefix}",
      description: "Change channel prefix",
    },
    {
      name: "!config info {info}",
      description: "Change channel info",
    },
    {
      name: "!config greet {greeting}",
      description: "Change channel greeting message",
    },
    {
      name: "!config farewell {farewell}",
      description: "Change channel farewell message",
    },
    {
      name: "!config autoban {min_warnings}",
      description: "Set min warinings count after which user gets banned",
    },
    {
      name: "!config channels levels {enable|disable}",
      description: "Enable or disable leveling on the channel",
    },
    {
      name: "!ban @{user}",
      description: "Ban user from server",
    },
    {
      name: "!unban @{user}",
      description: "Unban user from server",
    },
    {
      name: "!sban @{user}",
      description: "Soft ban user from server",
    },
    {
      name: "!info",
      description: "Get server info",
    },
  ];
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center p-4">
      <div
        className="p-3 p-sm-4 p-md-5 convex-1"
        style={{ borderRadius: "40px", maxWidth: "1000px" }}
      >
        <div className="lead text-center mb-4 mx-auto">Commands Table</div>
        <div className="table-responsive">
          <table className="table-striped w-100">
            <tbody>
              {commands.map((x) => {
                return (
                  <tr>
                    <td className="py-3 text-center">{x.name}</td>
                    <td className="py-3 text-center">{x.description}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CommandsTable;
