import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick} style={{backgroundColor: props.color}}>
        {props.text}
      </button>
    </div>
  )
}

export default Button