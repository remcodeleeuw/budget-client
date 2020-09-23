import React from 'react';
import { StyledTable } from '../../../../styles/ui/table/StyledTable';
import { StyledTableHeader } from '../../../../styles/ui/table/StyledTableHeader';
import SpendingEntry from '../SpendingEntry/SpendingEntry';

function SpendingList(props) {
  const { spendings } = props;
  return (
    <StyledTable>
      <StyledTableHeader>
        <h1>Je uitgaven</h1>
      </StyledTableHeader>
      {spendings.map(spending => {
        return (
          <SpendingEntry spending={spending} {...props} />
        )
      })}
    </StyledTable>
  )
}

export default SpendingList