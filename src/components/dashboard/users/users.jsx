import React from "react";
import Table from "../utilities/table";
const Users = ({ users }) => {
  return (
    <div className="row no-gutters">
      <div className="col p-2" style={{ height: "580px", width: "600px" }}>
        <Table users={users}></Table>
      </div>
    </div>
  );
};

export default Users;
