const local = {
  cognito: {
    REGION: 'eu-west-1',
    USER_POOL_ID: 'eu-west-1_BuR4tucBV',
    APP_CLIENT_ID: '93jah2t890u3d3k9m9dm6vced',
    IDENTITY_POOL_ID: 'eu-west-1:6fbab3fa-4964-4312-a5ca-442ed7780267'
  },
  tripGateway: {
    REGION: 'eu-west-1',
    URL: 'http://localhost:5000'
  },
  spendingGateway: {
    REGION: 'eu-west-1',
    URL: 'http://localhost:5001'
  }
}

const dev = {
  cognito: {
    REGION: 'eu-west-1',
    USER_POOL_ID: 'eu-west-1_BuR4tucBV',
    APP_CLIENT_ID: '93jah2t890u3d3k9m9dm6vced',
    IDENTITY_POOL_ID: 'eu-west-1:6fbab3fa-4964-4312-a5ca-442ed7780267'
  },
  apiGateway: {
    REGION: 'eu-west-1',
    URL: 'https://hnh38rw75m.execute-api.eu-west-1.amazonaws.com/dev'
  }
}

const prod = {
  cognito: {
    REGION: 'eu-west-1',
    USER_POOL_ID: 'eu-west-1_BuR4tucBV',
    APP_CLIENT_ID: '93jah2t890u3d3k9m9dm6vced',
    IDENTITY_POOL_ID: 'eu-west-1:6fbab3fa-4964-4312-a5ca-442ed7780267'
  },
  apiGateway: {
    REGION: 'eu-west-1',
    URL: 'https://hnh38rw75m.execute-api.eu-west-1.amazonaws.com/dev'
  }
}

const config = () => {
  if (!process.env.REACT_APP_STAGE) {
    return local
  }
  return process.env.REACT_APP_STAGE === 'prod' ? prod : dev
}

export default {
  ...config()
}
