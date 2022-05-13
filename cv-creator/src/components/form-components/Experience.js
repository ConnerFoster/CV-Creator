import React from 'react'
import EEInput from './EEInput'
import DeleteButton from './DeleteButton'

const Experience = (props) => {
  return (
    <div>
      <EEInput
        section='position'
        place='Position'
        onUpdate={props.onUpdate}
        index={props.index}
        value={props.experienceObj.position}
      />
      <EEInput
        section='company'
        place='Company'
        onUpdate={props.onUpdate}
        index={props.index}
        value={props.experienceObj.company}
      />
      <EEInput
        section='city'
        place='City'
        onUpdate={props.onUpdate}
        index={props.index}
        value={props.experienceObj.city}
      />
      <EEInput
        section='from'
        place='From'
        onUpdate={props.onUpdate}
        index={props.index}
        value={props.experienceObj.from}
      />
      <EEInput
        section='to'
        place='To'
        onUpdate={props.onUpdate}
        index={props.index}
        value={props.experienceObj.to}
      />
      <DeleteButton index={props.index} onClick={props.remove} text='Delete' />
    </div>
  )
}

export default Experience
