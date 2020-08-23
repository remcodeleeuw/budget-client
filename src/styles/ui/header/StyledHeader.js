import styled from 'styled-components'

export const StyledHeader = styled.header.attrs(props => ({
  className: 'flex flex-row justify-between'
}))`
  background: ${props => props.theme.background};
  box-sizing: border-box;

  padding: 16px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0 16px;
  }

  li {
    margin-right: 32px;
  }

  .menu {
    &-link {
      color: #fff;
      text-decoration: none;
  }
}
`
