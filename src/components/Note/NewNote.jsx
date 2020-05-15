import React from 'react'

import NoteEditor from 'components/Note/NoteEditor'

const NewNote = ({ addNewNote, selectNote }) => {
  const emptyNote = {
    id: 0,
    title: '',
    body: '',
    status: 'new'
  }

  return (
    <div style={{ marginBottom: '10px' }}>
      <NoteEditor
        data={emptyNote}
        readOnly={false}
        selectNote={selectNote}
        addNewNote={addNewNote}
      />
    </div>
  )
}

export default NewNote
