import React from 'react';
import { DangerButton, PrimaryButton } from '../../../../styles/ui/general/StyledButton';
import { StyledTableEntry } from '../../../../styles/ui/table/StyledTableEntry';

function SpendingEntry(props) {
  const { spending } = props
  return (
    <StyledTableEntry>
      <span>{spending.description}</span>
      <span>{spending.category}</span>
      <span>{spending.price} euro</span>
      <DangerButton onClick={() => props.deleteSpending(spending._id)}>Delete</DangerButton>
    </StyledTableEntry>
  )
}

export default SpendingEntry