import React from 'react'

import { useAppContext } from '../../../context'
import { StyledPageContainer } from '../../../styles/StyledPageContainer'

function Destination () {
  const { selectedTrip } = useAppContext()
  console.log(selectedTrip)
  return (
    <StyledPageContainer>
      <div className='mt-64'>
        <p className='text-white'>
          Test
        </p>
      </div>
    </StyledPageContainer>
  )
}

export default Destination
