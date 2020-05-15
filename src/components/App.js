import React from 'react'
import 'styles/main.scss'
import NoteList from 'components/Note/NoteList'
// Data
import notes from 'data/notes.json'

function App () {
  console.log('App', notes)
  const list = [...notes]
  return (
    <div className='text-center'>
      <NoteList list={list} />
    </div>
  )
}

export default App
