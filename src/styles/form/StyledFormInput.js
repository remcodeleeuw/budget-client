import styled from 'styled-components'

export const StyledFormInput = styled.input`
  border: 1px solid ${props => props.theme.teal500};
  background: transparent;
  margin-bottom: 48px;
  color: #fff;
  font-size: inherit;
  padding: 16px;
  width: 90%;
  line-height: 0;
  outline: none;
  &::placeholder {
    color: #E0E0E0;
  }
`
