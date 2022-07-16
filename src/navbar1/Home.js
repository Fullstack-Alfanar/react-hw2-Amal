import React from 'react'
import '../styles/Home.scss'

function Home (props) {
  return (
    <div className="container">
      
      <div className="card">
        <h3 className="name">{props.name}</h3>

      </div>
    </div>
  );
}

export default Home