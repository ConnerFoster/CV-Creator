import React from 'react'

const DeleteButton = (props) => {
  return (
    <div>
      <button
        onClick={() => props.onClick(props.index)}
        style={{backgroundColor: 'darkgray'}}>
        {props.text}
      </button>
    </div>
  )
}

export default DeleteButton
