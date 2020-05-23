const axios = require("axios");

export const getGuilds = (token, callback) => {
  axios
    .post("/guilds", {
      userToken: token,
    })
    .then(function (response) {
      if (response.data) {
        callback(response.data);
      } else {
        callback({ error: "no data in response" });
      }
    })
    .catch(function (error) {
      callback({ error: error });
    });
};
