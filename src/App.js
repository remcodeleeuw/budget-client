import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Auth } from 'aws-amplify'

import { AppContext } from './context'

// Views
import Home from './ui/Home'
import Header from './ui/Header'
import Trip from './features/trips/containers/Trip'
import Login from './features/auth/containers/Login'
import Register from './features/auth/containers/Register'
import NewTrip from './features/trips/containers/NewTrip'
import Destination from './features/destination/container/Destination'

const theme = {
  background: '#212121',
  white: '#FFFFFF',
  teal100: '#E6FFFA',
  teal200: '#B2F5EA',
  teal300: '#81E6D9',
  teal400: '#4FD1C5',
  teal500: '#38B2AC',
  teal600: '#319795',
  teal700: '#2C7A7B',
  teal800: '#285E61',
  teal900: '#234E52',
  gray700: '#616161',
  gray800: '#424242',
  maxWidth: '1280px',
  bs: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);'
}

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background: ${theme.background};
    padding: 0;
    margin: 0;
    font-size: 1.8rem;
    line-height: 2;
    font-family: 'Open Sans', sans-serif;
  }
  a {
    text-decoration: none;
    color: #333;
  }
`

function App () {
  const [isAuthenticated, userHasAuthenticated] = useState(false)
  // eslint-disable-next-line
  const [isAuthenticating, setIsAuthenticating] = useState(true)
  const [selectedTrip, setSelectedTrip] = useState()

  useEffect(() => {
    onLoad()
  }, [])

  async function onLoad () {
    try {
      await Auth.currentSession()
      userHasAuthenticated(true)
    } catch (e) {
      if (e !== 'No current user') {
        alert(e)
      }
    }

    setIsAuthenticating(false)
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div className='App'>
        <AppContext.Provider value={
          {
            isAuthenticated,
            userHasAuthenticated,
            selectedTrip,
            setSelectedTrip
          }
        }
        >
          <Header />
          <Route exact path='/' component={Home} />

          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />

          <Route exact path='/trip' component={Trip} />
          <Route exact path='/trip/new' component={NewTrip} />
          <Route exact path='/destination/:id' component={Destination} />
        </AppContext.Provider>

      </div>
    </ThemeProvider>
  )
}

export default App
