import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 8px 16px;
  padding: 8px 32px;
  border-radius: 16px;
  &:focus {
    outline: none;
  }
    
  &:hover {
    cursor: pointer;
  }
`

export const PrimaryButton = styled(StyledButton)`
  background: ${props => props.theme.teal600};
  color: #fff;

  &:hover {
    background: ${props => props.theme.teal300};;
    color: ${props => props.theme.teal600};
  }

`

export const DangerButton = styled(StyledButton)`
  background: #d32f2f;
  color: #fff;


`
export const CreateNewButton = styled(PrimaryButton)`
  position: absolute;
  bottom: 5%;
  right: 5%;
  padding: 16px 32px;

  & a {
    color: #fff;
  }


`