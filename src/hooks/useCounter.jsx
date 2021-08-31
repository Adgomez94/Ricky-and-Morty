import { useState } from 'react'



export const useCounter = ( number ) => {
  
  const [counter, setCounter] = useState(number)

  const increment = () =>{
    setCounter( counter => counter + 1)
  }

  const decrement = () =>{
    setCounter( counter => counter - 1)
  }

  return { counter, increment, decrement }
}