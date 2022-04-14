/* Хук отслеживает состояние авторизации, путём
внесения или проверки  данных в локальном хранилище:
токена, готовности, имени пользователя
Методы выполняют логин и логаут
*/

import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'

export const useAuth = () => {
    const [fullaccess, setFullaccess] = useState(false)
    const [logname, setLogname] = useState(null)
    const [token, setToken] = useState(null)
    
    const login = useCallback((_login,_token, _fullaccess) => {
 
      setLogname(_login)  
      setToken(_token)
      setFullaccess(_fullaccess)
      
      
      localStorage.setItem(storageName, JSON.stringify({
        logname: _login,
        token: _token,
        fullaccess: _fullaccess
      }))
    }, [])
  
  
    const logout = useCallback(() => {
      setToken(null)
      setLogname(null)
      setFullaccess(false)
      localStorage.removeItem(storageName)
    }, [])
  
    useEffect(() => {
      const data = JSON.parse(localStorage.getItem(storageName))
    
      if (data && data.token) {
     
        login(data.token, data.fullaccess, data.logname)
     
      }
      
    }, [login])
  
  
    return { login, logout, token,fullaccess,logname }
  }