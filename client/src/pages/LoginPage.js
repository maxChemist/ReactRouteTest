import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'

export const LoginPage=()=>{
  const auth=useContext(AuthContext)

  const {loading, request, error, clearError} = useHttp()
  const [form, setForm]=useState({
    login:'', password:''
  })
 
  // useEffect(() => {
  //   message(error)
  //   clearError()
  // }, [error, message, clearError])


  const changeHandler=e=>{
    setForm({...form, [e.target.name]:e.target.value})
 }


 const loginHandler=async ()=>{
  try{
// Закоментировано на время отладки, не нужно обращение к серверу
    // const data=await request('/login','POST',{...form})
    // await auth.login(data.logname, data.token, data.fullaccess)
    await auth.login("someLogname", "someToken", true)
    
  }catch(err){
    console.log("Ошибка на ЛогинПэйдж: ",err)
  }

}



  return( 
  <div style={{marginLeft:"40%",marginTop:20}}>
    <div>
      <input       
              placeholder="Логин"
              type="text"
              name="login"
              onChange={changeHandler}
            />
    </div> 
    <div>
                    <input       
              placeholder="Введите пароль"
              id="password"
              type="password"
              name="password"
              onChange={changeHandler}
              onKeyPress={e=>{if (e.key==='Enter'){loginHandler()}}}
            />
    </div>
              <button
              disabled={loading}
              onClick={loginHandler}
              >
                Войти
              </button>
 
  </div>
   )
}