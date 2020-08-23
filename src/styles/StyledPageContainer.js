import styled from 'styled-components'

const Base = styled.section`

  @media only screen and (min-width: 960px) {
    padding-inline-start: 64px;
    padding-inline-end: 64px;
  }

  top: 0;
  position: absolute;
  height: 100vh;
  width: 100%;

  h1 {
    text-align: center;
    color: #fff;
    font-size: 3.6rem;
    letter-spacing: 1px;
    margin-bottom: 0;
  }
  h2 {
    margin-top: 0;
    text-align: center;
    color: #fff;
    font-size: 2.8rem;
    letter-spacing: 1px;
  }
`

export const StyledPageContainer = styled(Base)`
  div {
  }
`

export const StyledAuthPageContainer = styled(Base)`
  display: flex;
`
