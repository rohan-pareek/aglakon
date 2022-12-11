import React from 'react'

export default function Players({players, activeIndex}) {
  return (
    <div className='players-list'>
        {players.map((player, index) => (
            <div className={`player-card ${activeIndex === index ? 'active-card': ''}`} key={player}>{player}</div>
        ))}
        {players.length === 0 && <p>No players added!</p>}
    </div>
  )
}
