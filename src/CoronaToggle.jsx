import React, { Component } from 'react'
// import {Toggle} from "react-toggle-component"

class CoronaToggle extends Component {
  render() {
    return (
      <div className="toggle">
        <label><h2>Show Coronavirus news?</h2></label>
        <input type="checkbox" name="name" id="id" />
      </div>
    )
  }
}

export default CoronaToggle
