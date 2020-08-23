import styled from 'styled-components'

export const StyledTableEntry = styled.div`
  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.teal300};
  padding: 8px 32px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;

  a {
    color: ${props => props.theme.white};
    text-transform: capitalize
  }
  &:hover {
    border: 1px solid ${props => props.theme.white};
    cursor: pointer;
  }
`
