import React from "react";
import auth from "../auth";

class Dashboard extends React.Component {
render(){
    return (
        <div>
          <h1>Dashboard</h1>
          <button
            onClick={() => {
              auth.logout(() => {
                this.props.history.push("/");
              });
            }}
          >
            Logout
          </button>
        </div>
      );
}
}
 export default Dashboard;