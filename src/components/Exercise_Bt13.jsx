import React, { Component } from "react";

export default class Exercise_Bt13 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      code: "",
      warning: "",
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
        warning: "Mã nhân viên không được để trống",
      });
     
    } else if (code[0] !== "N" && code[1] !== "V") {
      this.setState({
          warning: "Mã nhân viên không đúng định dạng",
          
      });
     
    } else if (code.length < 8) {
      this.setState({
        warning: "Mã nhân viên không được ngắn hơn 8 kí tự",
        
      });
     
    } else if (code.length > 16) {
      this.setState({
        warning: "Mã nhân viên không được dài hơn 16 kí tự",
        
      });
     
    } else {
      this.setState({
        arr: [...this.state.arr, this.state.code],
       warning:""
      });
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="code"
            onChange={this.handleChange}
            value={this.state.code}
          />
          <p style={{color: "red"}}>{this.state.warning}</p>
          <button>Submit</button>
            </form>
            <div>{this.state.arr.join(" - ")}</div>
      </>
    );
  }
}
