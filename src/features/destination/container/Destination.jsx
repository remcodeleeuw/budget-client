import React, { useState } from 'react'
import { CreateNewButton } from '../../../styles/ui/general/StyledButton'
import { Link, useHistory } from 'react-router-dom'
import { StyledCard } from '../../../styles/ui/general/Card'
import { StyledDashboardHeader } from '../../../styles/ui/dashboard/DashboardHeader'
import Sidebar from '../../../ui/Sidebar'
import { useAppContext } from '../../../context'
import SpendingList from '../../spendings/components/SpendingList/SpendingList'
import Spending from '../../spendings/container/Spending'

function Destination() {



  return (
    <>
      {/* <StyledDashboardHeader>
        <StyledCard>
          <span>Totaal kosten: 1350 euro</span>
          Aantal dagen: 28
        </StyledCard>
        <StyledCard>
          <div className="card__header">
            <h2>
              Kosten per categorie
              </h2>
          </div>
          <div className="card__inner">
            <div>
              <h3>Eten & Drinken</h3>
              <span>150</span>
            </div>
            <div>
              <h3>Overnachtigen</h3>
              <span>500</span>
            </div>
            <div>Transport</div>
            <div></div>
            <div>Overig</div>
          </div>
        </StyledCard>
      </StyledDashboardHeader> */}
      <Spending/>
      <CreateNewButton>
        <Link to='/trip/destination/spending/new'>
          Voeg nieuwe uitgave toe
          </Link>
      </CreateNewButton>
    </>
  )
}

export default Destination
