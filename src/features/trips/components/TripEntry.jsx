import React from 'react';
import { Link } from 'react-router-dom';
import { StyledTableEntry } from '../../../styles/ui/table/StyledTableEntry';

function TripEntry({ trip, handleDelete, handleSelectedTrip }) {
  return (
    <StyledTableEntry>
      <Link to={`/destination/${trip.destination}`} onClick={() => {
        handleSelectedTrip(trip.tripId)
      }}>
        <span>{trip.destination}</span>
      </Link>
      <button onClick={() => {
        handleDelete(trip.tripId)
      }}>Delete</button>
    </StyledTableEntry>
  )
}

export default TripEntry