import React from 'react'
import EEInput from './EEInput'
import DeleteButton from './DeleteButton'

const Education = (props) => {
  return (
    <div>
      <EEInput
        section='university'
        place='University'
        onUpdate={props.onUpdate}
        index={props.index}
        value={props.educationObj.university}
      />
      <EEInput
        section='city'
        place='City'
        onUpdate={props.onUpdate}
        index={props.index}
        value={props.educationObj.city}
      />
      <EEInput
        section='state'
        place='State'
        onUpdate={props.onUpdate}
        index={props.index}
        value={props.educationObj.state}
      />
      <EEInput
        section='degree'
        place='Degree'
        onUpdate={props.onUpdate}
        index={props.index}
        value={props.educationObj.degree}
      />
      <EEInput
        section='date'
        place='Date of Graduation'
        onUpdate={props.onUpdate}
        index={props.index}
        value={props.educationObj.date}
      />
      <EEInput
        section='subject'
        place='Major'
        onUpdate={props.onUpdate}
        index={props.index}
        value={props.educationObj.subject}
      />
      <DeleteButton
        index={props.index}
        onClick={props.remove}
        text='Delete'
        color='gray'
      />
    </div>
  )
}

export default Education
