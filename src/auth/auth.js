import store from "../store/store";
const DiscordOauth2 = require("discord-oauth2");
const oauth = new DiscordOauth2();

export const login = (code) => {
  oauth
    .tokenRequest({
      clientId: "687765988636229689",
      clientSecret: "M7xSfiqX7xqn6j4YUiHVeS9ohOdo6-1M",
      code: code,
      scope: "identify email",
      grantType: "authorization_code",
      redirectUri: "https://astrobot.netlify.com/auth",
    })
    .then(async (obj) => {
      if (obj.access_token) {
        getUser(obj.access_token);
      }
    });
};

export const getUser = (token) => {
  oauth.getUser(token).then((obj) => {
    console.log("user from discord", obj);
    console.log("user token: ", token);
    obj.token = token;
    store.dispatch({ type: "SET_USER", user: obj });
  });
};
