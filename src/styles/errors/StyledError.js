import styled from 'styled-components';

export const StyledError = styled.div`
  background: #ef5350;
  color: #fff;
  margin-bottom: 32px;
  padding-inline-start: 16px;
  padding: 8px;
  text-align: center;
`
export const StyledPageError = styled(StyledError)`
  margin: auto;
  width: 50%;
`

export const StyledFormError = styled(StyledError)`
  width: 90%;
`
