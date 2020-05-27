import React, { Component } from 'react'

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
      <>
        <form className="toggle" onChange={this.handleToggle}>
          <label><h2>Show Coronavirus news?</h2><p>Check to hide.</p></label>
          <label> 
            <input 
              type="checkbox" 
              name="name" 
              id="toggle" 
              checked={this.state.covidcheck}
              onChange={this.handleCheck}/>
          </label>
        </form>
      </>
    )
  }
}

export default CovidToggle
