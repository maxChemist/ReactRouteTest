import  { useContext, useCallback, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import {useMessage} from './message.hook'

export const useHttp=()=>{
    const auth=useContext(AuthContext)
    const [loading, setLoading]=useState(false)
    const [error,setError]=useState(null)
    const message = useMessage()


    const request=useCallback(
        
        async (url, method="GET", body=null,headers={})=>{

            try{
           
                if (body) {
                    body = JSON.stringify(body)
                  }     
                  headers['Content-Type'] = 'application/json'
                  headers['Authorization']=auth["token"]
             const fullURL='http://localhost:7000'+url  
             const response= await fetch(fullURL,{method,body, headers})
             
             const data = await response.json()
            //если пришло сообщение - отбразим его
          
            if (data.message!==undefined)(message(data.message))
          
            //если ответ: "не авторизован" - произвести логаут
            if(!response.ok){
                if(response.status===401) {
                    auth.logout()
                }
                throw new Error('Какая-то ошибка при запросе на сервер')
            }

             setLoading(false)

            return data
            }catch(e){
                setLoading(false)
                setError(e.message)
                throw e
            }
        },[message] )
        // },[auth,message] )
        const clearError=()=>setError(null)

   return {loading, request,error,clearError}
}