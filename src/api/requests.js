const origin = "http://78.63.244.233:8080";

export const getGuilds = (token, callback) => {
  fetch(`${origin}/guilds`, {
    method: "POST",
    body: {
      userToken: token,
    },
  })
    .then((res) => {
      res.json();
    })
    .then((res) => {
      callback(res);
    })
    .catch((er) => {
      callback({ error: er });
    });
};
