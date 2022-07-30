import React from 'react'

const RegisterContext = React.createContext({
  showRegisteredMessage: false,
  registeredMessage: () => {},
  registeredUser: '',
  updatedRegisteredUser: () => {},
  registeredTopic: '',
  updatedRegisteredTopic: () => {},
})
export default RegisterContext
