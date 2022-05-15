import React, {useState, useRef} from 'react'
import {useReactToPrint} from 'react-to-print'
import Form from './components/Form'
import Header from './components/Header'
import Preview from './Preview'

function App() {
  const componentRef = useRef()

  const handlePrint = useReactToPrint({content: () => componentRef.current})

  const [state, setState] = useState({
    personalInfo: {
      FirstName: '',
      LastName: '',
      title: '',
      address: '',
      phone: '',
      email: '',
      description: '',
    },
  })

  const updatePreview = (text, section) => {
    setState((prevState) => {
      let personalInfo = Object.assign({}, prevState.personalInfo)
      personalInfo[section] = text
      return {personalInfo}
    })
  }
  const [exp, setExp] = useState({
    experience: [
      {
        //position: 'Software Dev',
        //company: 'Google',
        //city: 'California',
        //from: '2020',
        //to: '2022',
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
      },
    ],
  })

  //console.log(exp.experience[1].position)

  const updateExperience = (text, section, index) => {
    setExp((prevState) => {
      let experience = Object.assign([], prevState.experience)
      experience[index][section] = text
      return {experience}
    })
  }

  const addExperience = () => {
    setExp({
      experience: [
        ...exp.experience,
        {
          position: '',
          company: '',
          city: '',
          from: '',
          to: '',
        },
      ],
    })
  }

  const removeExperience = (index) => {
    setExp((prevState) => {
      let experience = Object.assign([], prevState.experience)
      experience.splice(index, 1)
      //console.log(experience)
      return {experience}
    })
  }

  const [edu, setEdu] = useState({
    education: [
      {
        university: '',
        city: '',
        state: '',
        degree: '',
        subject: '',
        date: '',
        /*university: 'Harvard',
        city: 'Somthing',
        state: 'Mass',
        degree: 'B.S.',
        subject: 'Computer Science',
        date: '2022',*/
      },
    ],
  })

  const updateEducation = (text, section, index) => {
    setEdu((prevState) => {
      let education = Object.assign([], prevState.education)
      education[index][section] = text
      return {education}
    })
  }

  const addEducation = () => {
    setEdu({
      education: [
        ...edu.education,
        {
          university: '',
          city: '',
          state: '',
          degree: '',
          subject: '',
          date: '',
        },
      ],
    })
  }

  const removeEducation = (index) => {
    setEdu((prevState) => {
      let education = Object.assign([], prevState.education)
      education.splice(index, 1)
      //console.log(experience)
      return {education}
    })
  }

  const reset = () => {
    setEdu({
      education: [
        {
          university: '',
          city: '',
          state: '',
          degree: '',
          subject: '',
          date: '',
        },
      ],
    })
    setExp({
      experience: [
        {
          position: '',
          company: '',
          city: '',
          from: '',
          to: '',
        },
      ],
    })
    setState({
      personalInfo: {
        FirstName: '',
        LastName: '',
        title: '',
        address: '',
        phone: '',
        email: '',
        description: '',
      },
    })
  }

  const loadExample = () => {
    setEdu({
      education: [
        {
          university: 'Great State University',
          city: 'Great City',
          state: 'California',
          degree: 'Bachelor of Science',
          subject: 'Computer Science',
          date: '05/14/2020',
        },
      ],
    })
    setExp({
      experience: [
        {
          position: 'Software Engineer',
          company: 'Big Tech Company',
          city: 'New York',
          from: '2021',
          to: '2022',
        },
      ],
    })
    setState({
      personalInfo: {
        FirstName: 'John',
        LastName: 'Doe',
        title: 'Software Engineer',
        address: '123 Main St. New York, NY 10001',
        phone: '123-456-7890',
        email: 'johndoe@example.com',
        description: 'Talented software developer with years of experience',
      },
    })
  }

  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <Form
          onUpdate={updatePreview}
          experience={exp.experience}
          onUpdateEE={updateExperience}
          onUpdateEdu={updateEducation}
          education={edu.education}
          addExperience={addExperience}
          addEducation={addEducation}
          removeExperience={removeExperience}
          removeEducation={removeEducation}
          onPrint={handlePrint}
          reset={reset}
          personalInfo={state.personalInfo}
          loadExample={loadExample}
        />
        <Preview
          data={state.personalInfo}
          experience={exp.experience}
          education={edu.education}
          ref={componentRef}
        />
      </div>
    </div>
  )
}

export default App
