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
      FirstName: 'Conner',
      LastName: 'Foster',
      title: 'Software Engineer',
      address: '946 E Beech St Sullivan, IN 47882',
      phone: '123-456-7899',
      email: 'connerf99@gmail.com',
      description: 'Just a test lorem ipsum dolor',
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
        position: 'Software Dev',
        company: 'Google',
        city: 'California',
        from: '2020',
        to: '2022',
        //position: '',
        //company: '',
        //city: '',
        //from: '',
        //to: '',
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
