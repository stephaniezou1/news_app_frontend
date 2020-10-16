import React, { Component } from 'react'

class CovidToggle extends Component {

  handleToggle = (evt) => {
    this.props.handleCovidCheck(evt.target.checked)
  }

  render() {
    return (
      <div className="ui slider checkbox">
        <input
          type="checkbox"
          name="name"
          onChange={this.handleToggle}
        />
        <label><h2 className="header">Hide Coronavirus news</h2></label>
      </div>
    )
  }
}

export default CovidToggle
