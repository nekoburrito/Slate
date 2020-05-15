import React from 'react'
import NoteEditor from 'components/Note/NoteEditor'

const Note = ({ data, selected, readOnly, selectNote, updateNote, deselectNote }) =>
  <div className='note'>
    <NoteEditor
      data={data}
      selected={selected}
      readOnly={readOnly}
      selectNote={selectNote}
      updateNote={updateNote}
      deselectNote={deselectNote}
    />
  </div>

export default Note
