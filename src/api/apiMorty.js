import axios from 'axios'

const apiRickyMorty = axios.create({
  baseURL:'https://rickandmortyapi.com/api/character'
})

export default apiRickyMorty