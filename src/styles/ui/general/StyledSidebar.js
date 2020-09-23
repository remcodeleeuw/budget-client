import styled from 'styled-components';

export const StyledSidebar = styled.header`
  background: #EEEEEE;
  /* box-shadow: ${props => props.theme.bs}; */
  border-right: 2px solid #BDBDBD;
  position: relative;
  width: 12%;

  nav {
    height: 100vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 12%;
  }
  

  a {
    text-align: center;
    border-bottom: 1px solid #E0E0E0;
    padding: 16px 32px;
    color: ${props => props.theme.gray900};
    &:hover {
      background: ${props => props.theme.teal300};
      color: #fff;
    }
    &.is-active {
      border-bottom: 1px solid ${props => props.theme.teal200};
      background: ${props => props.theme.teal300};
      color: #fff;
    }
  }

`

export const StyledAuthSidebarSection = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  width: 100%;

  li {
    &:last-child {
      border: none;
    }

  }
`

