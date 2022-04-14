import React, {useContext} from 'react'
import {BrowserRouter, Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {AuthContext} from './context/AuthContext'
import { useAuth } from './hooks/auth.hook';

function App() {
   const {token, logname,fullaccess, login,logout} =useAuth()
   const auth=useContext(AuthContext)
   const isAuthenticated=!!token
   const routes=useRoutes(fullaccess,isAuthenticated)
  return (
    <div>
    
    <AuthContext.Provider value={{
      token,fullaccess, logname, login,logout,isAuthenticated
    }}>
    <BrowserRouter>
          {routes}
    </BrowserRouter>
    </AuthContext.Provider>
    </div>
  );
}

export default App;
