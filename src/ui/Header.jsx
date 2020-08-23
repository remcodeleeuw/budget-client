import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import { useAppContext } from '../context'

import { StyledHeader } from '../styles/ui/header/StyledHeader'
import { Auth } from 'aws-amplify'

function Header () {
  const history = useHistory()
  const { isAuthenticated, userHasAuthenticated } = useAppContext()

  async function handleLogout () {
    await Auth.signOut()

    userHasAuthenticated(false)
    history.push('/login')
  }
  function menuRight () {
    return (
      <ul>
        {isAuthenticated
          ? (
            <>
              <li>
                <Link className='menu-link' to='/trip'>Trips</Link>
              </li>
              <li>
                <Link
                  className='menu-link'
                  to=''
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link className='menu-link' to='/login'>Login</Link>
            </li>
          )}
      </ul>
    )
  }
  return (
    <StyledHeader>
      <ul>
        <Link className='menu-link' to='/'>Home</Link>

      </ul>
      <nav>
        {menuRight()}
      </nav>
    </StyledHeader>
  )
}

export default Header
