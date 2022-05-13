import React from 'react'
import Input from '../Input'

const PersonalInfo = (props) => {
  return (
    <div>
      <h3>Personal Information</h3>
      <Input onUpdate={props.onUpdate} section='FirstName' place='First Name' />
      <Input onUpdate={props.onUpdate} section='LastName' place='Last Name' />
      <Input onUpdate={props.onUpdate} section='address' place='Address' />
      <Input onUpdate={props.onUpdate} section='phone' place='Phone' />
      <Input onUpdate={props.onUpdate} section='email' place='Email' />
      <Input
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
