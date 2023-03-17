import { useEffect, useState } from "react"

function useLocalStorage(key, initialValue = 'dark') {
  const [state, setState] = useState(() => {
    const local = localStorage.getItem(key)

        if(local) {
          //Se houver algo salvo retorna....
          return JSON.parse(local)
        }
        //Se não houver retorna o valor inicial
        return initialValue

  })


  useEffect(() => {
      //Toda vez que o state for alterado, salva no localStorage
      localStorage.setItem(key, JSON.stringify(state))
  },[key, state])

  //Deixamos o state e o setState Acessíveis para quem for usar o Hook

  return [state, setState]

}

export default useLocalStorage
