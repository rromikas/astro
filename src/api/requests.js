const axios = require("axios");

let prefix = process.env.NODE_ENV === "production" ? "api" : "";

export const GetGuilds = (token, callback) => {
  axios
    .get(`${prefix}/guilds`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(function (response) {
      if (response.data) {
        callback(response.data);
      } else {
        callback({ error: "no data in response" });
      }
    })
    .catch(function (error) {
      callback({ error: "can't get info", fullError: error });
    });
};

export const GetGuild = (token, guildId, callback) => {
  axios
    .get(`${prefix}/guilds/${guildId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.data) {
        callback(response.data);
      } else {
        callback({ error: "no data in response" });
      }
    })
    .catch(function (error) {
      callback({ error: "can't get info", fullError: error });
    });
};

export const GetAutoRoles = (token, guildId, callback) => {
  axios
    .get(`${prefix}/guilds/${guildId}/autoroles`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.data) {
        callback(response.data);
      } else {
        callback({ error: "no data in response" });
      }
    })
    .catch(function (error) {
      callback({ error: "can't get info", fullError: error });
    });
};

export const GetRoles = (token, guildId, callback) => {
  axios
    .get(`${prefix}/guilds/${guildId}/roles`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.data) {
        callback(response.data);
      } else {
        callback({ error: "no data in response" });
      }
    })
    .catch(function (error) {
      callback({ error: "can't get info", fullError: error });
    });
};

export const GetMembers = (token, guildId, callback) => {
  axios
    .get(`${prefix}/guilds/${guildId}/members`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.data) {
        callback(response.data);
      } else {
        callback({ error: "no data in response" });
      }
    })
    .catch(function (error) {
      callback({ error: "can't get info", fullError: error });
    });
};

export const GetEnabledCommands = (token, guildId, callback) => {
  axios
    .get(`${prefix}/guilds/${guildId}/enabled-commands`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.data) {
        callback(response.data);
      } else {
        callback({ error: "no data in response" });
      }
    })
    .catch(function (error) {
      callback({ error: "can't get info", fullError: error });
    });
};

export const GetCommands = (token, guildId, callback) => {
  axios
    .get(`${prefix}/guilds/${guildId}/commands`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.data) {
        callback(response.data);
      } else {
        callback({ error: "no data in response" });
      }
    })
    .catch(function (error) {
      callback({ error: "can't get info", fullError: error });
    });
};

export const GetChannels = (token, guildId, callback) => {
  axios
    .get(`${prefix}/guilds/${guildId}/channels`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.data) {
        callback(response.data);
      } else {
        callback({ error: "no data in response" });
      }
    })
    .catch(function (error) {
      callback({ error: "can't get info", fullError: error });
    });
};

export const GetEmojis = (token, guildId, callback) => {
  axios
    .get(`${prefix}/guilds/${guildId}/emojis`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.data !== null) {
        callback(response.data);
      } else {
        callback({ error: "no data in response" });
      }
    })
    .catch(function (error) {
      callback({ error: "can't get info", fullError: error });
    });
};

export const UpdateGuildInfo = (token, guildId, guild, callback) => {
  axios
    .patch(`${prefix}/guilds/${guildId}`, guild, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {})
    .catch(function (error) {
      callback({ error: "can't update info", fullError: error });
    });
};

export const UpdateChannel = (token, guildId, channel, callback) => {
  axios
    .patch(`${prefix}/guilds/${guildId}/channels/${channel.id}`, channel, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {})
    .catch(function (error) {
      callback({ error: "can't update info", fullError: error });
    });
};

export const UpdateCommands = (token, guildId, command, callback) => {
  axios
    .patch(`${prefix}/guilds/${guildId}/commands`, [command], {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {})
    .catch(function (error) {
      callback({ error: "can't update info", fullError: error });
    });
};

export const CreateAutorole = (token, guildId, role, callback) => {
  role.guild_id = guildId;
  axios
    .put(`${prefix}/guilds/${guildId}/autoroles/${role.role_id}`, role, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      callback(response);
    })
    .catch(function (error) {
      callback({ error: "can't update info", fullError: error });
    });
};

export const UpdateAutorole = (token, guildId, role, callback) => {
  role.guild_id = guildId;
  axios
    .patch(`${prefix}/guilds/${guildId}/autoroles/${role.role_id}`, role, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      callback(response);
    })
    .catch(function (error) {
      callback({ error: "can't update info", fullError: error });
    });
};

export const CreateEmoji = (token, guildId, emoji, callback) => {
  axios
    .put(`${prefix}/guilds/${guildId}/emoji`, emoji, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      callback(response);
    })
    .catch(function (error) {
      callback({ error: "can't update info", fullError: error });
    });
};

export const DeleteEmoji = (token, guildId, emoji, callback) => {
  axios
    .delete(`${prefix}/guilds/${guildId}/emojis/${emoji.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      callback(response);
    })
    .catch(function (error) {
      callback({ error: "can't update info", fullError: error });
    });
};
