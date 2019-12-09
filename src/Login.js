import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          _id: 1,
          username: "rahulsai",
          password: "123456"
        },
        {
          _id: 2,
          username: "dileep",
          password: "12345"
        },
        {
          _id: 3,
          username: "satyarth",
          password: "1234"
        }
      ],
      username: "",
      password: "",
      errusername: "",
      errpasword: "",
      usernamestyle: {},
      passstyle: {}
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        value.length < 1
          ? this.setState({
              errusername: "Username shouldn't be empty",
              usernamestyle: { border: "1px solid red" }
            })
          : this.setState({ errusername: "", usernamestyle: {} });

        this.setState({ username: value });
        break;
      case "password":
        value.length < 1
          ? this.setState({
              errpasword: "Password shouldn't be empty",
              passstyle: { border: "1px solid red" }
            })
          : this.setState({ errpasword: "", passstyle: {} });
        this.setState({
          password: value
        });
        break;
    }
  };
  submitForm = e => {
    this.state.data.map(data => {
      const name = data.username;
      const password = data.password;
      if (this.state.username === "" || this.state.password === "") {
        this.setState({
          error: "Please fill all the fields",
          usernamestyle: { border: "1px solid red" },
          passstyle: { border: "1px solid red" }
        });
      } else if (
        this.state.username.match(name) ||
        this.state.password.match(password)
      ) {
        this.setState({
          error: ""
          // usernamestyle: {},
          // passstyle: {}
        });
        alert("Logged In");
        window.location.href = "/";
      } else {
        this.setState({ error: "Please give correct credentials" });
      }
    });
  };
  render() {
    const errusername = this.state.errusername;
    const errpasword = this.state.errpasword;
    const usernamestyle = this.state.usernamestyle;
    const passstyle = this.state.passstyle;
    return (
      <div className="container">
        <div className="semi-container">
          <h3>Login</h3>
          <div className="big-container">
            <Form>
              <label>Username</label>
              <Form.Control
                style={usernamestyle}
                type="text"
                placeholder="Username"
                name="username"
                className="user-name"
                onChange={e => this.handleChange(e)}
              />
              <div className="err-msg">{errusername ? errusername : ""}</div>
              <br />
              <label>Password</label>
              <Form.Control
                style={passstyle}
                type="password"
                name="password"
                placeholder="Password"
                onChange={e => this.handleChange(e)}
              />
              <div className="err-msg">{errpasword ? errpasword : ""}</div>
              <br />
              <div className="err-msg">
                {this.state.error ? this.state.error : ""}
              </div>
              <br />
              <a href="https://www.google.com/">Forgot Password?</a> <br />
              <br />
              <Button variant="primary" onClick={e => this.submitForm(e)}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
