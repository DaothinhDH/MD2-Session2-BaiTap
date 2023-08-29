import React, { Component } from "react";

export default class Exercise_Bt14 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      email: "",
      password: "",
      warningCode: "",
      warningEmail: "",
      warningPassword: "",
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
    e.preventDefault(e);
    const { code, arr } = this.state;
    if (!code) {
      this.setState({
        warningCode: "Mã không được để trống",
      });
    } else if (code[0] !== "N" && code[1] !== "V") {
      this.setState({
        warningCode: "Mã không đúng định dạng",
      });
    } else if (code.length < 8) {
      this.setState({
        warningCode: "Mã không được nhỏ hơn 8 ký tự ",
      });
    } else if (code.length > 18) {
      this.setState({
        warningCode: "Mã không được lớn hơn 18 ký tự",
      });
    }

    if (!this.state.email) {
      this.setState({
        warningEmail: "Email không được để trống",
      });
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      this.setState({
        warningEmail: "Email không đúng định dạng",
      });
    }

    if (this.state.password.length < 8) {
      this.setState({
        warningPassword: "Mật khẩu không được nhỏ hơn 8 ký tự",
      });
    }

    if (
      code &&
      code.startsWith("NV") &&
      code.length >= 8 &&
      code.length <= 18 &&
      email &&
      /^\S+@\S+\.\S+$/.test(email) &&
      password.length >= 8
    ) {
      this.setState({
        warningPassword: "Đăng ký thành công",
      });
    }
  };

  render() {
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <h3>Đăng ký</h3>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Code
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              name="code"
            />
            <p style={{ color: "red" }}>{this.state.warningCode}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              onChange={this.handleChange}
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              name="email"
            />
            <p style={{ color: "red" }}>{this.state.warningEmail}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onChange={this.handleChange}
              type="password"
              className="form-control"
              name="password"
            />
            <p style={{ color: "red" }}>{this.state.warningPassword}</p>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}
