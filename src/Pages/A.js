import React from 'react'

function A(props) {
  return (
    <div>
        <h1>Hello Props</h1>
    <h1> Hello {props.name}</h1>
    <h1> My age is {props.age}</h1>
    </div>
  )
}

export default A
