import React from 'react'

const Preview = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className='preview'>
      <div className='preview-name'>
        <p id='name-text'>{props.data.FirstName + ' ' + props.data.LastName}</p>
      </div>

      <div className='preview-contact'>
        <p>{props.data.address}</p>
        <p> | </p>
        <p>{props.data.phone}</p>
        <p> | </p>
        <p>{props.data.email}</p>
      </div>

      <div className='preview-description'>
        <p className='heading'>Description</p>
        <p id='description-text'>{props.data.description}</p>
      </div>

      <div className='preview-education'>
        <p className='heading'>Education</p>
        {props.education.map((edu, eduIndex) => {
          return (
            <div key={eduIndex}>
              <li>{edu.university + ' - ' + edu.city + ' , ' + edu.state}</li>
              <li>{edu.degree + ' | ' + edu.date}</li>
              <li>{edu.subject}</li>
            </div>
          )
        })}
      </div>

      <div className='preview-experience'>
        <p className='heading'>Experience</p>
        {props.experience.map((exp, expIndex) => {
          return (
            <div key={expIndex}>
              <p className='preview-experience-dates'>
                {exp.from + ' - ' + exp.to}
              </p>
              <p className='preview-experience-content'>
                {exp.position + ' | ' + exp.company + ' | ' + exp.city}{' '}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
})

export default Preview

//Maybe when dom re-renders, we get new indexes and dont need to worry?
//can just delete from array?
