import React from 'react'

export default function Header(props) {
  return (
    <div className="header">
        <p><strong>Score</strong>{props.score}</p>
         <p><strong>Best Score</strong>{props.bestScore}</p>
    </div>
  )
}
