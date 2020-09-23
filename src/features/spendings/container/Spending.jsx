import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useAppContext } from '../../../context';
import {StyledTableHeader} from '../../../styles/ui/table/StyledTableHeader';
import Loading from '../../../ui/Loading';
import SpendingList from '../components/SpendingList/SpendingList';

function Spending() {
  const history = useHistory()
  const { isAuthenticated } = useAppContext()
  const { selectedTrip } = useAppContext()
  const [spendings, setSpendings] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return
      }
      if (!selectedTrip) {
        history.push('/trip')
        return
      }
      setIsLoading(true)
      try {
        const trips = await loadSpendings()
        setSpendings(trips)
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

  function loadSpendings() {
    return API.get('spending', `/spending/trip/${selectedTrip.tripId}`)
  }

  async function reloadSpendings() {
    try {
      const trips = await loadSpendings()
      setSpendings(trips)
      setIsLoading(false)
    } catch (e) {
      if (e.message === 'Network Error') {
        setError('We kunnen geen verbinding maken met de server, probeer het later opnieuw')
        setIsLoading(false)
      }
    }
  }

  async function deleteSpending(spendingid) {
    setIsLoading(true)
    await API.del('spending', `/spending/${spendingid}`);
    await reloadSpendings()
  }

  return (
    <>

      {isLoading ? <Loading /> : null}
      {spendings && !isLoading ? <SpendingList spendings={spendings} deleteSpending={deleteSpending} /> : null}
    </>
  )
}

export default Spending