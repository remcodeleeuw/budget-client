import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { StyledForm } from '../../../styles/form/StyledForm'
import { StyledFormButton } from '../../../styles/form/StyledFormButton'
import { StyledFormInput } from '../../../styles/form/StyledFormInput'

import { StyledAuthPageContainer } from '../../../styles/StyledPageContainer'
import { useAppContext } from '../../../context'
import { useFormFields } from '../../../hooks/fieldsHook'
import { Auth } from 'aws-amplify'

function Register () {
  const [fields, handleFieldChange] = useFormFields({
    email: '',
    password: '',
    confirmPassword: '',
    confirmationCode: ''
  })
  const [newUser, setNewUser] = useState(null)
  const { userHasAuthenticated } = useAppContext()
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit (event) {
    event.preventDefault()

    setIsLoading(true)

    try {
      const newUser = await Auth.signUp({
        username: fields.email,
        password: fields.password
      })
      setIsLoading(false)
      setNewUser(newUser)
    } catch (e) {
      console.log(e)
      setIsLoading(false)
    }
  }

  async function handleConfirmationSubmit (event) {
    event.preventDefault()

    setIsLoading(true)

    try {
      await Auth.confirmSignUp(fields.email, fields.confirmationCode)
      userHasAuthenticated(true)
      history.push('/login')
    } catch (e) {
      console.log(e)
      setIsLoading(false)
    }
  }

  function renderForm () {
    return (
      <StyledForm action='' onSubmit={handleSubmit}>
        <h1>Maak een account aan</h1>
        <Link to='/login'>Heb je al een account?</Link>
        <StyledFormInput
          type='text'
          name='email'
          placeholder='Je email'
          onChange={handleFieldChange}
        />
        <StyledFormInput
          type='password'
          placeholder='Je wachtwoord'
          name='password'
          onChange={handleFieldChange}
        />

        <StyledFormButton>Maak account</StyledFormButton>
      </StyledForm>
    )
  }

  function renderConfirmationForm () {
    return (
      <StyledForm action='' onSubmit={handleConfirmationSubmit}>
        <h1>Bevestig je account</h1>
        <StyledFormInput
          type='tel'
          name='confirmationCode'
          placeholder='Bekijk je email voor de code'
          onChange={handleFieldChange}
        />
        <StyledFormButton>Bevestig</StyledFormButton>
      </StyledForm>
    )
  }

  return (
    <StyledAuthPageContainer>
      {newUser === null ? renderForm() : renderConfirmationForm()}
    </StyledAuthPageContainer>
  )
}

export default Register
