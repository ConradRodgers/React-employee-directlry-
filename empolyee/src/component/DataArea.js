import React from "react";
import API from "../api.js";
import Table from "react-bootstrap/Table";
class DataArea extends React.Component {
  state = { users: [] };
  componentDidMount() {
    API.getUsers().then((res) => {
      this.setState({ users: res.data.results });
    });
  }
  render() {
    return(
    {this.state.users.map((x) => {
        return (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>dob</th>
                <th>Name</th>
                <th>Cell</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
          //return <h1>{this.state.users.map((x) => x.email)}</h1>;
        );
      });
    }
  }
}
    )
export default DataArea;
