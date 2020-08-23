import { useState } from 'react'

export function useFormFields (initialState) {
  const [fields, setValues] = useState(initialState)

  return [
    fields,
    function ({ target }) {
      setValues({
        ...fields,
        [target.name]: target.value
      })
    }
  ]
}
