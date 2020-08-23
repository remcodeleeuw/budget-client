import React from 'react';
import { StyledError, StyledPageError, StyledFormError } from '../styles/errors/StyledError';

function ErrorMessage({ message, form }) {
  console.log(message)

  function renderPageError() {
    return (
      <StyledPageError>
        {message}
      </StyledPageError>
    )
  }

  function renderFormError() {
    return (
      <StyledFormError>
        {message}
      </StyledFormError>
    )
  }

  return (
    <>
      {form ? renderFormError() : renderPageError()}
    </>
  )
}

export default ErrorMessage