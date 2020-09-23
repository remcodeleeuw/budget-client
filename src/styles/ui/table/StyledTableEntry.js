import styled from 'styled-components'

export const StyledTableEntry = styled.div`
  background: #fff;
  box-shadow: ${props => props.theme.bs};
  border-radius: 8px;
  padding: 16px 32px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  transition: all .3s;

  a, span {
    align-self: center;
    color: ${props => props.theme.gray900};
    text-transform: capitalize
  }
  &:hover {
    background: ${props => props.theme.teal600};
    cursor: pointer;
    transform: scale(1.05);

    a, span {
      color: #fff;
    }

  }
`
