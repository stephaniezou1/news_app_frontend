import React from 'react'

let Tag = (props) => {
  // let { content } = props.tag
  console.log(props.tag)

  return (
    <>
      <button className="tag">
        #
        {/* { content }  */}
      </button>
    </>
  )
}

export default Tag