import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch'
import Character from './Character'

const CharacterList = () => {

  const { counter, increment, decrement } = useCounter(1)
  const { loading, next, prev, data } = useFetch(`?page=${counter}`)


  return (
    <div className="container">
      <div className="characters">
        {
          loading
            ? null
            :
            data.map(character => (
              <Character
                key={character.id}
                {...character} />
            ))
        }
      </div>
      <div className="group-button">
        {
          !prev
            ? null
            :
            <button
              onClick={
                decrement
              }>Anterior</button>
        }

        {
          !next
            ? null
            :
            <button
              onClick={increment}>Siguiente</button>
        }
      </div>
    </div>
  )
}

export default CharacterList
