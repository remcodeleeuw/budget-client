import React, { useState } from 'react';

import { StyledAuthPageContainer } from '../../../styles/StyledPageContainer';
import { StyledForm } from '../../../styles/form/StyledForm';
import Loading from '../../../ui/Loading';
import { StyledFormButton } from '../../../styles/form/StyledFormButton';
import { StyledFormInput } from '../../../styles/form/StyledFormInput';
import { useHistory } from 'react-router-dom'
import { API } from 'aws-amplify'

// Hooks
import { useFormFields } from '../../../hooks/fieldsHook'

function NewSpending() {
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const [fields, handleFieldChange] = useFormFields({
    price: ''
  })
  async function handleSubmit(event) {
    event.preventDefault()
    setIsLoading(true)
    try {
      console.log(fields)
    } catch (error) {
      console.log(error.message)
    }
    setIsLoading(false)
  }
  function renderFormComponents() {
    return (
      <>
        <h1>Voeg een nieuwe uitgave toe</h1>
        <StyledFormInput
          type='number'
          placeholder='Hoeveel heb je uitgegeven?'
          name='price'
          onChange={handleFieldChange}
        />
        <StyledFormButton>Submit</StyledFormButton>
      </>
    )
  }
  return (
    <StyledAuthPageContainer>
      <StyledForm action='' onSubmit={handleSubmit}>
        {isLoading ? <Loading /> : renderFormComponents()}
      </StyledForm>
    </StyledAuthPageContainer>
  )
}

export default NewSpending