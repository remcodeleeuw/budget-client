import styled from 'styled-components'

const StyledButton = styled.a`
  background: #fff;
  border: 1px solid #fff;;
  padding: 8px 16px;
`

export const CreateNewButton = styled(StyledButton)`
  background: transparent;
  color: #fff;
  position: absolute;
  bottom: 5%;
  right: 5%;
  font-size: 1.6rem;
  :hover {
    background: ${props => props.theme.background};
    border: 1px solid ${props => props.theme.teal600};
    color: ${props => props.theme.teal600};
  }
  a {
    color: #fff;
  }
`
