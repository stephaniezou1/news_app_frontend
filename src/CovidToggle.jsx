import React, { Component } from 'react'

class CovidToggle extends Component {

  handleToggle = (evt) => {
    this.props.handleCovidCheck(evt.target.checked)
  }

  render() {
    return (
      <>
        <form className="toggle">
          <label><h2 className="header">Show Coronavirus news?</h2><p>Check to hide.</p></label>
          <label> 
            <input 
              type="checkbox" 
              name="name" 
              id="toggle" 
              checked={this.props.covidCheck}
              onChange={this.handleToggle}/>
          </label>
        </form>
      </>
    )
  }
}

export default CovidToggle
