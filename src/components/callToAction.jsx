import React from "react";

const CallToAction = () => {
  return (
    <section>
      <h1
        style={{ cursor: "pointer" }}
        onClick={() =>
          window.open(
            "https://discordapp.com/oauth2/authorize?client_id=683749582705786882&scope=bot&permissions=2146958591"
          )
        }
      >
        Connect bot
      </h1>
      <p>To be developed</p>
    </section>
  );
};

export default CallToAction;
