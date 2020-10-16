import React from 'react'

const CovidToggle = (props) => {

  let handleToggle = (event) => {
    props.handleCovidCheck(event.target.checked)
  }

  return (
    <div className="ui slider checkbox">
      <input type="checkbox" name="name" onChange={handleToggle} />
      <label><h2 className="header">Hide Coronavirus news</h2></label>
    </div>
  )
}

export default CovidToggle
