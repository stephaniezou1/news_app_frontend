import React, { Component } from 'react'

class CovidToggle extends Component {
  
  state = {
    covidCheck: false
  }

  handleCheck = () => {
    this.setState((currentState) => ({
      covidCheck: !currentState.covidCheck
    }))
  }

  handleToggle = () => {
    this.props.handleCovidCheck(this.state.covidCheck)
  }

  render() {
    return (
      <>
        <form className="toggle" onChange={this.handleToggle}>
          <label><h2>Show Coronavirus news?</h2><p>Check to hide.</p></label>
          <label> 
            <input 
              type="checkbox" 
              name="name" 
              id="toggle" 
              checked={this.state.covidCheck}
              onChange={this.handleCheck}/>
          </label>
        </form>
      </>
    )
  }
}

export default CovidToggle
