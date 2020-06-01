import React from "react";
import UserInfo from "./userinfo/userinfo";
import Emojis from "./emojis/emojis";
import ServerInfo from "./serverinfo";

const Appearance = ({ createEmoji, deleteEmoji, emojis, setEmojis }) => {
  return (
    <div className="container-fluid px-0">
      <div className="row no-gutters">
        <div className="p-2 col-12 col-md-8 col-lg-5">
          <UserInfo></UserInfo>
        </div>
        <div className="p-2 col-12 col-md-8 col-lg-5">
          <Emojis
            createEmoji={createEmoji}
            deleteEmoji={deleteEmoji}
            emojis={emojis}
            setEmojis={setEmojis}
          ></Emojis>
        </div>
      </div>
    </div>
  );
};

export default Appearance;
