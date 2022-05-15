import React from 'react'
import Input from '../Input'

const PersonalInfo = (props) => {
  return (
    <div>
      <h3>Personal Information</h3>
      <Input
        value={props.personalInfo.FirstName}
        onUpdate={props.onUpdate}
        section='FirstName'
        place='First Name'
      />
      <Input
        value={props.personalInfo.LastName}
        onUpdate={props.onUpdate}
        section='LastName'
        place='Last Name'
      />
      <Input
        value={props.personalInfo.address}
        onUpdate={props.onUpdate}
        section='address'
        place='Address'
      />
      <Input
        value={props.personalInfo.phone}
        onUpdate={props.onUpdate}
        section='phone'
        place='Phone'
      />
      <Input
        value={props.personalInfo.email}
        onUpdate={props.onUpdate}
        section='email'
        place='Email'
      />
      <Input
        value={props.personalInfo.description}
        id='desc-form'
        onUpdate={props.onUpdate}
        section='description'
        place='Description'
      />
    </div>
  )
}

export default PersonalInfo

//need to make description form bigger
