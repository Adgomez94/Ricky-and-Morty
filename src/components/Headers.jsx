import React from 'react'

const Headers = ({ title }) => {
  return (
    <header>
      <div className="container">
        <div className="content">
          <h1 className="title">{ title }</h1>
        </div>
      </div>
    </header>
  )
}

export default Headers
