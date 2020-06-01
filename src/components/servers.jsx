import React, { useEffect, useState } from "react";
import { GetGuilds } from "../api/requests";
import { connect } from "react-redux";
import history from "../routing/history";
import { invite } from "../api/invitation";
import { uid } from "react-uid";

const Servers = (props) => {
  const [servers, setServers] = useState([]);
  useEffect(() => {
    GetGuilds(props.user.token, (res) => {
      console.log("SERVERIAI", res);
      if (res.error) {
        console.log(res.error);
      } else {
        setServers(res);
      }
    });
  }, [props.user]);

  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center p-4">
      {props.user.username === "" && false ? (
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
                          {x.bot ? (
                            <div
                              onClick={() =>
                                history.push(`/servers/${x.id}/dashboard`)
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
