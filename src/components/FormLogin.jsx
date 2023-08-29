import React, { Component } from "react";

export default class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      userName: this.state.userName,
      password: this.state.password,
    };
    console.log(user);
  };

  render() {
    return (
      <>
        <div>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                UserName
              </label>
              <input
                onChange={this.handleChange}
                className="form-control"
                id="username"
                name="userName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                onChange={this.handleChange}
                type="password"
                className="form-control"
                id="password"
                name="password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <button>register</button>
          </form>
        </div>
      </>
    );
  }
}
