import React from 'react'

const inputStyle = {
  border: 'none',
  width: '100%',
  borderRadius: '3px',
  height: '1.5rem',
  marginBottom: '.5rem',
}

const EEInput = (props) => {
  return (
    <div>
      <input
        placeholder={props.place}
        value={props.value}
        name={props.section}
        style={inputStyle}
        onChange={(e) =>
          props.onUpdate(e.target.value, props.section, props.index)
        }
      />
    </div>
  )
}

export default EEInput
