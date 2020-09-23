import React, { useState } from 'react';

import { StyledForm } from '../../../styles/form/StyledForm';
import Loading from '../../../ui/Loading';
import { StyledFormButton } from '../../../styles/form/StyledFormButton';
import { StyledFormInput, StyledOption, StyledSelect } from '../../../styles/form/StyledFormInput';
import { useHistory } from 'react-router-dom'
import { API } from 'aws-amplify'
import { useAppContext } from '../../../context'

// Hooks
import { useFormFields } from '../../../hooks/fieldsHook'

function NewSpending() {
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const [fields, handleFieldChange] = useFormFields({
    description: null,
    price: null,
    category: "food"
  })
  const { selectedTrip } = useAppContext()

  async function handleSubmit(event) {
    event.preventDefault()
    setIsLoading(true)
    try {
      await createSpending({
        tripId: selectedTrip.tripId || null,
        ...fields
      })
      history.push(`/trip/destination/${selectedTrip.destination}`)
    } catch (error) {
      console.log(error.message)
    }
    setIsLoading(false)
  }

  function createSpending(spending) {
    return API.post('spending', '/spending', {
      body: spending
    })
  }
  function renderFormComponents() {
    return (
      <>
        <h1>Voeg een nieuwe uitgave toe</h1>
        <StyledFormInput
          type='text'
          placeholder='Waar heb je geld aan uitgegeven?'
          name='description'
          onChange={handleFieldChange}
        />
        <StyledFormInput
          type='number'
          placeholder='Hoeveel heb je uitgegeven?'
          name='price'
          onChange={handleFieldChange}
        />
        <span>Welk categorie behoort je uitgaven toe?</span>
        <StyledSelect name="category" onChange={handleFieldChange}>
          <StyledOption value="food">Eten & Drinken</StyledOption>
          <StyledOption value="accomodation">Accomodatie</StyledOption>
          <StyledOption value="transport">Transport</StyledOption>
          <StyledOption value="activities">Activiteiten</StyledOption>
          <StyledOption value="misc">Overig</StyledOption>
        </StyledSelect>
        <StyledFormButton>Submit</StyledFormButton>
      </>
    )
  }
  return (
    <>
      <StyledForm action='' onSubmit={handleSubmit}>
        {isLoading ? <Loading /> : renderFormComponents()}
      </StyledForm>
    </>
  )
}

export default NewSpending