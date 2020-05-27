import React, { Component } from 'react'
// import {Toggle} from "react-toggle-component"

class CovidToggle extends Component {
  
  state = {
    covidcheck: false
  }

  handleCheck = () => {
    this.setState((currentState) => ({
      covidcheck: !currentState.covidcheck
    }))
  }

  handleToggle = () => {
    this.props.handleCovidCheck(this.state.covidcheck)
  }


  render() {
    return (
      <div className="toggle">
        <form onChange={this.handleToggle}>
          <label><h2>Show Coronavirus news? (check to hide)</h2></label>
          <label> 
            <input 
              type="checkbox" 
              name="name" 
              id="id" 
              checked={this.state.covidcheck}
              onChange={this.handleCheck}/>
          </label>
        </form>
      </div>
    )
  }
}

export default CovidToggle
