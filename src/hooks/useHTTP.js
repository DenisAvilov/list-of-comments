import { useCallback } from "react"
import { useState } from "react/cjs/react.development"


export const useHTTP =  () => {
  
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(null)  

  const request = useCallback( async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true)
  try{

    // Проверяем: переданны данные пользователем или нет
    if(body){
      body = JSON.stringify(body)
      headers['Content-type'] = 'application/json'
    }

    // Делаем запрос на сервер
    const response = await fetch(url, {method, body, headers}) 
    
    const data = await response.json()

    setLoading(false)

      return data

      }

      catch(e){
          setLoading(false)        
          setError(e.message)
          console.log('Описание ошибки', e.message)
          throw e
      }
  
},[])

    //Чистим ошибки
    const clearError = useCallback(() => setError(null),[] )

    return {request, error, loading, clearError}
}