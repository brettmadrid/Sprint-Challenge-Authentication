import React from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const endpoint = "http://localhost:9000/api/login";

    axios
      .post(endpoint, this.state)
      .then(res => {
        // store token on localStorage
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/jokes");
      })
      .catch(e => {
        console.error(e);
      });
  };

  render() {
    return (
      <>
        <h4>Sign In</h4>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="username" className="mr-sm-2">
              Username
            </Label>
            <Input
              name="username"
              id="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              type="text"
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="password" className="mr-sm-2">
              Password
            </Label>
            <Input
              name="password"
              id="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </>
    );
  }
}

export default Login;

