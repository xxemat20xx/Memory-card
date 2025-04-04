import React from 'react'

export default function Cards(props) {
  return (
    <div className="card"> 
      <img src={props.img} alt={props.img} />
      <h3>{props.name}</h3>
    </div>
  )
}

