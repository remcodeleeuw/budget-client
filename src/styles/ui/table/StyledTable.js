import styled from 'styled-components'

export const StyledTable = styled.div`
  width: 75%;
  color: #fff;
  margin: auto;
  padding: 16px;
  button {
    background: ${props => props.theme.teal600};
    border: none;
    color: #fff;
    width: 8%;

    &:hover {
      background: #fff;
      color: #00BFA5;
      cursor: pointer;
    }
  }
`
