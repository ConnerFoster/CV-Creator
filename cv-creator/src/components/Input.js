import React from 'react'

const inputStyle = {
  border: 'none',
  width: '100%',
  borderRadius: '3px',
  height: '1.5rem',
  marginBottom: '.5rem',
}

/* Probably just need to setup a different input component for the 
education and experience sections, as they will take in different props
and use different functions*/

const Input = (props) => {
  return (
    <div>
      <input
        type={props.type}
        placeholder={props.place}
        name={props.section}
        style={inputStyle}
        onChange={(e) => props.onUpdate(e.target.value, props.section)}
      />
    </div>
  )
}

//Need to finish these default props

export default Input
