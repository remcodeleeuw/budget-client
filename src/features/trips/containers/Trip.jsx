import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API } from 'aws-amplify'

import { useAppContext } from '../../../context'

import { StyledPageContainer } from '../../../styles/StyledPageContainer'
import { StyledTable } from '../../../styles/ui/table/StyledTable'
import { CreateNewButton } from '../../../styles/ui/general/StyledButton'
import { StyledDefaultHero } from '../../../styles/StyledHero'

// Components
import TripEntry from '../components/TripEntry'
import Loading from '../../../ui/Loading'
import ErrorMessage from '../../../ui/Error'

function Trip() {
  const { isAuthenticated } = useAppContext()
  const { setSelectedTrip } = useAppContext()
  const [trips, setTrips] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return
      }
      setIsLoading(true)
      try {
        const trips = await loadTrips()
        setTrips(trips)
        setIsLoading(false)
      } catch (e) {
        if (e.message === 'Network Error') {
          setError('We kunnen geen verbinding maken met de server, probeer het later opnieuw')
          setIsLoading(false)
        }
      }
    }
    // eslint-disable-next-line
    onLoad()
  }, [isAuthenticated])
  async function retrieveTrips() {
    if (!isAuthenticated) {
      return
    }
    setIsLoading(true)
    try {
      const trips = await loadTrips()
      setTrips(trips)
      setIsLoading(false)
    } catch (e) {
      if (e.message === 'Network Error') {
        setError('We kunnen geen verbinding maken met de server, probeer het later opnieuw')
        setIsLoading(false)
      }
    }
  }

  function loadTrips() {
    return API.get('trip', '/trip')
  }

  async function handleDelete(tripId) {
    setIsLoading(true)
    await API.del('trip', `/trip/${tripId}`)
    await retrieveTrips()
  }

  function handleSelectedTrip(tripId) {
    setSelectedTrip(tripId)
  }

  function renderTable() {
    return (
      <StyledTable>
        {trips.map(trip => {
          return (
            <TripEntry key={trip.tripId} trip={trip} handleDelete={handleDelete} handleSelectedTrip={handleSelectedTrip} />
          )
        })}
      </StyledTable>
    )
  }

  return (
    <StyledPageContainer>
      <StyledDefaultHero />
      <div className='mt-64'>
        <h1>Je gemaakte reizen</h1>
        {isLoading ? <Loading /> : null}
        {error ? <ErrorMessage message={error} /> : null}
        {!isLoading && trips ? renderTable() : null}
        <CreateNewButton>
          <Link to='/trip/new'>
            Maak nieuwe trip
          </Link>
        </CreateNewButton>
      </div>

    </StyledPageContainer>
  )
}

export default Trip
