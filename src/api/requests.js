const axios = require("axios");

export const GetGuilds = (token, callback) => {
  axios
    .get("/guilds", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(function (response) {
      console.log("response GUIDLS", response);
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
    .get(`/guilds/${guildId}`, {
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
    .get(`/guilds/${guildId}/autoroles`, {
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
    .get(`/guilds/${guildId}/roles`, {
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
    .get(`/guilds/${guildId}/members`, {
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
    .get(`/guilds/${guildId}/enabled-commands`, {
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
    .get(`/guilds/${guildId}/commands`, {
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
    .get(`/guilds/${guildId}/channels`, {
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
    .get(`/guilds/${guildId}/emojis`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log("EMOJIS RESPONSE IN API FILE", response);
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
    .patch(`/guilds/${guildId}`, guild, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log("Response after guild info update", response);
    })
    .catch(function (error) {
      callback({ error: "can't update info", fullError: error });
    });
};

export const UpdateChannel = (token, guildId, channel, callback) => {
  axios
    .patch(`/guilds/${guildId}/channels/${channel.id}`, channel, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log("Response after channels update", response);
    })
    .catch(function (error) {
      callback({ error: "can't update info", fullError: error });
    });
};

export const UpdateCommands = (token, guildId, command, callback) => {
  axios
    .patch(`/guilds/${guildId}/commands`, [command], {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log("Response after channels update", response);
    })
    .catch(function (error) {
      callback({ error: "can't update info", fullError: error });
    });
};

export const CreateAutorole = (token, guildId, role, callback) => {
  role.guild_id = guildId;
  axios
    .put(`/guilds/${guildId}/autoroles/${role.role_id}`, role, {
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
    .patch(`/guilds/${guildId}/autoroles/${role.role_id}`, role, {
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
