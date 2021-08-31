import React from 'react'

const Character = ({ name, species, status, image }) => {
  return (
    <div className="box">
      <img src={ image } alt={ name } />
      <div className="character">
        <div className="name">{ name }</div>
        <div className="specie">{ species }</div>
        <div className="status">{ status }</div>
      </div>
    </div>
  )
}

export default Character
