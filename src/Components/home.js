import React from "react";
import auth from "../auth";


class  Home extends React.Component {
    render(){
        return (
            <div>
              <h1>Landing Page</h1>
              <button
                onClick={() => {
                  auth.login(() => {
                    this.props.history.push("/dashboard");
                  });
                }}
              >
                Login
              </button>
            </div>
          );    
    }
  
};

export default Home;