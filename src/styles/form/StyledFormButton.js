import styled from 'styled-components'

export const StyledFormButton = styled.button`
  background: transparent;
  border: 1px solid ${props => props.theme.teal300};
  border-radius: 8px;
  color: ${props => props.theme.gray800};
  font-family: inherit;
  font-size: inherit;
  padding: 16px 32px;
  margin-bottom: 16px;
  transition: all .3s;
  line-height: 0;
  padding: 32px;
  :hover {
    background: #fff;
    color: ${props => props.theme.teal600}
  }
`
