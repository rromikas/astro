export const invite = (guild_id) => {
  window.location = `https://discordapp.com/oauth2/authorize?client_id=683749582705786882&guild_id=${guild_id}&scope=bot&permissions=2146958591`;
};

export const goto = (id) => {
  window.location = id;
};
