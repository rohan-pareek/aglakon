import React, { createRef } from 'react'

export default function AddPlayers({updatePlayers}) {

  const inputRef = createRef();

  return (
    <div className='add-player'>
      <h2>Add Players</h2>
      <textarea ref={inputRef} placeholder = "Write your player names here..."></textarea>
      <button onClick={() => updatePlayers(inputRef.current.value)}>Add</button>
    </div>
  )
}
