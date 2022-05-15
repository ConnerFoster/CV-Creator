import React, {useRef} from 'react'
import Button from './Button'
import PersonalInfo from './form-components/PersonalInfo'
import Experience from './form-components/Experience'
import Education from './form-components/Education'

const formStyle = {
  backgroundColor: '#eeeeee',
  marginLeft: '1rem',
  padding: '0 4rem 0 4rem',
  marginTop: '2rem',
  marginBottom: '2rem',
  paddingBottom: '1rem',
  borderRadius: '4px',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  width: '25rem',
}

const Form = (props) => {
  return (
    <>
      <div style={formStyle} id='main-form'>
        <PersonalInfo
          onUpdate={props.onUpdate}
          personalInfo={props.personalInfo}
        />
        <h3>Experience</h3>
        {props.experience.map((exp, expIndex) => {
          return (
            <Experience
              onUpdate={props.onUpdateEE}
              experienceObj={exp}
              key={expIndex}
              index={expIndex}
              remove={props.removeExperience}
            />
          )
        })}
        <Button onClick={props.addExperience} text='Add' color='gray' />
        <h3>Education</h3>
        {props.education.map((edu, eduIndex) => {
          return (
            <Education
              onUpdate={props.onUpdateEdu}
              educationObj={edu}
              key={eduIndex}
              index={eduIndex}
              remove={props.removeEducation}
            />
          )
        })}
        <Button onClick={props.addEducation} text='Add' color='gray' />
        <br />

        <button onClick={props.onPrint}>Generate PDF</button>
        <Button
          onClick={props.loadExample}
          text='Load Example'
          color='#c25c0e'
        />
        <Button onClick={props.reset} text='Reset' color='#b3211e' />
      </div>
    </>
  )
}

export default Form
