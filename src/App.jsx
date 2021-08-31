import React from 'react'

import "./App.scss"
import CharacterList from './components/CharacterList'
import Headers from './components/Headers'

const App = () => {
    return (
        <>
            <Headers title="Rick and Morty" />
            <CharacterList />
        </>
    )
}

export default App
