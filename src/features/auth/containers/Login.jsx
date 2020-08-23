import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { useAppContext } from '../../../context'

import { StyledForm } from '../../../styles/form/StyledForm'
import { StyledFormButton } from '../../../styles/form/StyledFormButton'
import { StyledFormInput } from '../../../styles/form/StyledFormInput'
import { StyledError } from '../../../styles/errors/StyledError'
import { Auth } from 'aws-amplify'

import { StyledAuthPageContainer } from '../../../styles/StyledPageContainer'
import { useFormFields } from '../../../hooks/fieldsHook'
import Loading from '../../../ui/Loading'

function Login () {
  const history = useHistory()
  const { userHasAuthenticated } = useAppContext()
  const [fields, handleFieldChange] = useFormFields({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState()
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit (event) {
    event.preventDefault()
    setIsLoading(true)
    try {
      await Auth.signIn(fields.email, fields.password)
      userHasAuthenticated(true)
      history.push('/trip')
    } catch (error) {
      console.log(error.message)
      setErrors(error.message)
    }
    setIsLoading(false)
  }

  function renderFormComponent () {
    return (
      <>
        <StyledFormInput
          type='text'
          placeholder='Je email'
          name='email'
          onChange={handleFieldChange}
        />
        <StyledFormInput
          type='password'
          placeholder='Je wachtwoord'
          name='password'
          onChange={handleFieldChange}
        />
        {errors ? <StyledError>
          {errors}
        </StyledError> : null}
        <StyledFormButton>Login</StyledFormButton>
      </>
    )
  }

  return (
    <StyledAuthPageContainer>
      <StyledForm action='' onSubmit={handleSubmit}>
        <h1>Login op je account</h1>
        <Link to='/register'>Heb je nog geen account?</Link>
        {isLoading ? <Loading /> : renderFormComponent()}
      </StyledForm>
    </StyledAuthPageContainer>
  )
}

export default Login
