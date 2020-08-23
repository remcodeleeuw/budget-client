import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { API } from 'aws-amplify'

// Context
import { useAppContext } from '../../../context'

// Hooks
import { useFormFields } from '../../../hooks/fieldsHook'

// Styles
import { StyledAuthPageContainer } from '../../../styles/StyledPageContainer'
import { StyledForm } from '../../../styles/form/StyledForm'
import { StyledFormInput } from '../../../styles/form/StyledFormInput'
import { StyledFormButton } from '../../../styles/form/StyledFormButton'

// Components
import Loading from '../../../ui/Loading'

function NewTrip() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    destination: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true)
    try {
      await createTrip({ ...fields })
      history.push("/trip")
    } catch (error) {
      console.log(error.message)
    }
    setIsLoading(false)
  }

  function createTrip(trip) {
    return API.post("trip", "/trip", {
      body: trip
    })
  }

  function renderFormComponents() {
    return (
      <>
        <h1>Voeg een nieuwe reis toe</h1>
        <StyledFormInput
          type="text"
          placeholder={"Waar is de bestemming?"}
          name="destination"
          onChange={handleFieldChange}
        />
        <StyledFormButton>Submit</StyledFormButton>
      </>
    )
  }
  return (
    <StyledAuthPageContainer>
      <StyledForm action="" onSubmit={handleSubmit}>
        {isLoading ? <Loading /> : renderFormComponents()}
      </StyledForm>
    </StyledAuthPageContainer>

  )
}

export default NewTrip
