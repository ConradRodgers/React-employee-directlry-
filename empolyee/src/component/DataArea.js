import React from "react";

import API from "../api.js";

class DataArea extends React.Component {
  state = { users: [] };
  componentDidMount() {
    API.getUsers().then((res) => {
      this.setState({ users: res.data.results });
    });
  }
  render() {
    return <h1>{this.state.users.map((x) => x.email)}</h1>;
  }
}

export default DataArea;
