import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Auth } from 'aws-amplify'

import { AppContext } from './context'

// Views
import Home from './ui/Home'
import Trip from './features/trips/containers/Trip'
import Login from './features/auth/containers/Login'
import Register from './features/auth/containers/Register'
import NewTrip from './features/trips/containers/NewTrip'
import Destination from './features/destination/container/Destination'
import NewSpending from './features/spendings/container/NewSpending'
import Sidebar from './ui/Sidebar'

import "./App.css"
import { StyledPageContainer } from './styles/StyledPageContainer'

const theme = {
  background: '#F5F5F5',
  white: '#FFFFFF',
  teal100: '#B2DFDB',
  teal200: '#80CBC4',
  teal300: '#4DB6AC',
  teal400: '#26A69A',
  teal500: '#009688',
  teal600: '#00897B',
  teal700: '#00796B',
  teal800: '#00695C',
  teal900: '#004D40',
  gray700: '#616161',
  gray800: '#424242',
  maxWidth: '1280px',
  bs: '0 3px 6px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);'
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

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false)
  // eslint-disable-next-line
  const [isAuthenticating, setIsAuthenticating] = useState(true)
  const [selectedTrip, setSelectedTrip] = useState({
    tripId: "6a082330-eae5-11ea-a8fa-f74db2899b47",
    destination: 'china'
  })

  useEffect(() => {
    onLoad()
  }, [])

  async function onLoad() {
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
        <StyledPageContainer>

          <AppContext.Provider value={
            {
              isAuthenticated,
              userHasAuthenticated,
              selectedTrip,
              setSelectedTrip
            }
          }
          >
            <Sidebar />
            <div className="mt-32">
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/trip' component={Trip} />
              <Route exact path='/trip/new' component={NewTrip} />
              <Route exact path='/trip/destination/:id' component={Destination} />
              <Route exact path='/trip/destination/spending/new' component={NewSpending} />
            </div>

          </AppContext.Provider>
        </StyledPageContainer>

      </div>
    </ThemeProvider>
  )
}

export default App
