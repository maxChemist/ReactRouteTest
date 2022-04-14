import {createContext} from 'react'

function noop() {}

export const AuthContext = createContext({
  token: null,
  admin:false,
  logname:null,
  login: noop,
  logout: noop,
  isAuthenticated: false
})