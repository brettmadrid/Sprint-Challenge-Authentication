import React from "react";
import axios from "axios";
import requiresAuth from "../auth/requiresAuth";

class Jokes extends React.Component {
  state = {
    jokes: []
  };

  componentDidMount() {
    axios
      .get("/jokes")
      .then(res => {
        this.setState({ jokes: res.data });
      })
      .catch(e => {
        console.error();
      });
  }

  render() {
    return (
      <>
        <h3>Jokes</h3>
        <ul>
          {this.state.jokes.map(j => (
            <li key={j.id}>{j.joke}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default requiresAuth(Jokes);





