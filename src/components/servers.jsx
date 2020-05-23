import React, { useEffect, useState } from "react";
import { getGuilds } from "../api/requests";
import { connect } from "react-redux";
import history from "../routing/history";
import { invite } from "../api/invitation";
import { uid } from "react-uid";

const Servers = (props) => {
  const [servers, setServers] = useState([
    {
      id: "707548514493792266",
      name: "Andrius's server",
      icon: "",
      owner: true,
      permissions: 2147483647,
      features: [],
      botExists: true,
    },
    {
      id: "713791617714094102",
      name: "Andrius's server2",
      icon: "",
      owner: true,
      permissions: 2147483647,
      features: [],
      botExists: false,
    },
    {
      id: "713791643957854348",
      name: "Andrius's server3",
      icon: "",
      owner: true,
      permissions: 2147483647,
      features: [],
      botExists: false,
    },
  ]);
  useEffect(() => {
    getGuilds(props.user.token, (res) => {
      if (res.error) {
        console.log(res.error);
      } else {
        setServers(res);
      }
    });
  }, [props.user]);

  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center p-4">
      {props.user.username === "" ? (
        <div className="lead">Login to view your servers</div>
      ) : (
        <div
          className="container p-4 convex-1"
          style={{ borderRadius: "40px" }}
        >
          <div className="row no-gutters lead d-flex justify-content-center mb-4">
            Your servers
          </div>
          <div className="row">
            <div className="col-12 col-md-7 mx-auto">
              <table className="table table-striped borderless mx-auto">
                <tbody>
                  {servers.map((x) => {
                    return (
                      <tr style={{ borderRadius: "40px" }} key={uid(x)}>
                        <td className="text-center lead">{x.name}</td>
                        <td className="d-flex justify-content-center">
                          {x.botExists ? (
                            <div
                              onClick={() =>
                                history.push("/dashboard", { server: x.name })
                              }
                              className="convex-2 py-2 px-4 enbl-btn lead"
                              style={{
                                maxWidth: "250px",
                                borderRadius: "40px",
                                color: "black",
                                border: "2px solid white",
                                cursor: "pointer",
                              }}
                            >
                              Dashboard
                            </div>
                          ) : (
                            <div
                              onClick={() => invite(x.id)}
                              className="convex-2 py-2 px-4 lead"
                              style={{
                                maxWidth: "200px",
                                borderRadius: "40px",
                                cursor: "pointer",
                              }}
                            >
                              Invite bot
                            </div>
                          )}
                          <div></div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state,
  };
}

export default connect(mapStateToProps)(Servers);
