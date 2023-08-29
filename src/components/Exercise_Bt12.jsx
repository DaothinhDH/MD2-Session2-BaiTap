import React, { Component } from 'react'

export default class Exercise_Bt12 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          code: "",
          arr: [
          "NV001",
          "NV002",
          "NV003",
          "NV004",
          "NV005",
          "NV006",
          "NV007",
          "NV008",
          "NV009",
          "NV010",
        ]
        } 
    }
    handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const index = this.state.arr.findIndex((e)=>e == this.state.code)
        if (!this.state.code) {
            alert("Mã nhân viên không được để trống");
            return
        } else if (index > -1) {
            alert("Mã nhân viên đã tồn tại");
            return;
        } else {
            this.setState({
                arr: [...this.state.arr, this.state.code],
                code: ""

            })
            alert("Đã thêm thành công")
        }
        
    }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name='code' onChange={this.handleChange} value={this.state.code} />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
