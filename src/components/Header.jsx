import React from 'react'

export default function Header(props) {
  return (
    <div>
        <p><strong>High Score</strong>{props.highScore}</p>
         <p><strong>Best Score</strong>{props.bestScore}</p>
    </div>
  )
}
