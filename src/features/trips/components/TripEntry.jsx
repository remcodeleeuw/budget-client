import React from 'react'
import { Link } from 'react-router-dom'
import { DangerButton, PrimaryButton } from '../../../styles/ui/general/StyledButton'
import { StyledTableEntry } from '../../../styles/ui/table/StyledTableEntry'

function TripEntry ({ trip, handleDelete, handleSelectedTrip }) {
  return (
    <StyledTableEntry>
      <Link
        to={`/trip/destination/${trip.destination}`} onClick={() => {
          handleSelectedTrip(trip)
        }}
      >
        <span>{trip.destination}</span>
      </Link>
      <DangerButton onClick={() => {
        handleDelete(trip.tripId)
      }}
      >Delete
      </DangerButton>
    </StyledTableEntry>
  )
}

export default TripEntry
