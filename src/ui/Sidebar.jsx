import React from 'react';
import { Auth } from 'aws-amplify'
import { NavLink, useHistory } from 'react-router-dom'
import { useAppContext } from '../context';
import { StyledAuthSidebarSection, StyledSidebar } from '../styles/ui/general/StyledSidebar';

function Sidebar() {
  const history = useHistory()

  const { selectedTrip } = useAppContext();
  const { isAuthenticated, userHasAuthenticated } = useAppContext()

  async function handleLogout() {
    await Auth.signOut()

    userHasAuthenticated(false)
    history.push('/login')
  }
  return (
    <StyledSidebar>
      <nav>
        <NavLink to="/" exact={true} activeClassName="is-active">Home</NavLink>
        <NavLink to="/trip" exact={true} activeClassName="is-active">Trips</NavLink>
        {selectedTrip ? (
          <NavLink to={`/trip/destination/${selectedTrip.destination}`} activeClassName="is-active">Budget overview</NavLink>
        ) : null}
        <StyledAuthSidebarSection>
          {isAuthenticated
            ? (
              <>
                <NavLink
                  className='menu-link'
                  to=''
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </>
            ) : (
              <NavLink className='menu-link' to='/login'>Login</NavLink>
            )}
        </StyledAuthSidebarSection>
      </nav>

    </StyledSidebar>
  )
}

export default Sidebar;