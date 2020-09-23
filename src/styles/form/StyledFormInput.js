import styled from 'styled-components'

export const StyledFormInput = styled.input`
  border: 1px solid ${props => props.theme.teal300};
  background: transparent;
  border-radius: 8px;
  margin-bottom: 32px;
  color: ${props => props.theme.gray700};
  font-size: inherit;
  padding: 16px;
  line-height: 0;
  outline: none;
  &::placeholder {
    color: ${props => props.theme.gray600};
  }
`

export const StyledSelect = styled.select`
  border: 1px solid ${props => props.theme.teal300};
  background: transparent;
  border-radius: 8px;
  margin-bottom: 32px;
  color: ${props => props.theme.gray600};
  font-size: inherit;
  padding: 16px;
  line-height: 0;
  outline: none;
`

export const StyledOption = styled.option`
  color: ${props => props.theme.teal300};
`