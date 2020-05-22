import React, { useEffect } from "react";
import { getGuilds } from "../api/requests";
import { connect } from "react-redux";
import history from "../routing/history";
import { invitationLink } from "../api/invitation";

const Servers = (props) => {
  const servers = [
    { name: "Astro", enabled: false },
    { name: "Bistro", enabled: true },
    { name: "Acto", enabled: false },
    { name: "Masto", enabled: true },
    { name: "Mato", enabled: false },
    { name: "Nato", enabled: true },
  ];
  useEffect(() => {
    getGuilds(props.user.token, (res) => {
      console.log("servers respnose", res.servers);
    });
  }, []);

  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center p-4">
      <div className="container p-4 convex-1" style={{ borderRadius: "40px" }}>
        <div className="row no-gutters lead d-flex justify-content-center mb-4">
          Your servers
        </div>
        <div className="row">
          <div className="col-12 col-md-7 mx-auto">
            <table className="table table-striped borderless mx-auto">
              <tbody>
                {servers.map((x) => {
                  return (
                    <tr style={{ borderRadius: "40px" }}>
                      <td className="text-center lead">{x.name}</td>
                      <td className="d-flex justify-content-center">
                        {x.enabled ? (
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
                            onClick={() => (window.location = invitationLink)}
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
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state,
  };
}

export default connect(mapStateToProps)(Servers);
