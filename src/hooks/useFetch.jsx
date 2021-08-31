import { useEffect, useState } from 'react'

import apiRickyMorty from '../api/apiMorty'

export const useFetch = ( params ) => {
  
  const [characters, setCharacters] = useState({ loading: true, data:null, next: null, prev: null })

  useEffect(() => {
    console.log(params)
    getCharacter()
  }, [ params ])

  const getCharacter = async() =>{
    const { data } = await apiRickyMorty.get(`/${ params }`)
    setCharacters({
      loading: false,
      next: data.info.next,
      prev: data.info.prev,
      data: data.results     
    })
  }

  return characters
}
