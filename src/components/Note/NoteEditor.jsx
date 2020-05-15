import React, { useState, useRef, useEffect } from 'react'
import classnames from 'classnames'

const NoteEditor = ({
  data, selected, readOnly, addNewNote,
  updateNote, selectNote, deselectNote
}) => {
  const [bodyVisible, setBodyVisible] = useState(false)
  const noteBody = useRef(null)
  const noteTitle = useRef(null)
  const noteContainer = useRef(null)

  console.log('NoteEditor for data', data)

  const status = data.status
  if (typeof readOnly === 'undefined') {
    readOnly = status === 'closed' || !selected
  }

  const handleInput = event => {
    resizeTextarea(event.target)
  }

  const handleKeyPress = event => {
    if (event.charCode === 13) {
      if (data.id === 0) {
        addNewNoteAndReset()
      } else {
        updateNoteItem('title')
      }
    }
  }

  const addNewNoteAndReset = () => {
    addNewNote(
      noteTitle.current.value.trim(),
      noteBody.current.value.trim()
    )
    noteTitle.current.value = ''
  }

  const resizeTextarea = (textarea, hideTextarea = false) => {
    console.log('ResizeTextArea called.', textarea, hideTextarea)
    if (noteContainer.current.style.height !== 'auto') {
      noteContainer.current.style.height = 'auto'
    }
    if (hideTextarea) {
      console.log('Setting height to 0')
      textarea.style.height = 0
      setTimeout(() => {
        noteContainer.current.style.height = 0
      }, 290)
      return
    }
    if (textarea.style.height === (textarea.scrollHeight + 'px')) return console.log('Ignoring Resize')
    textarea.style.height = ''
    textarea.style.height = textarea.scrollHeight + 'px'
  }

  const selectThisNote = event => {
    if (!selected) selectNote(data.id)
  }

  const updateNoteItem = (item, change) => {
    console.log('UpdateNoteItem', item, change)

    if (data.id === 0) {
      return
    }

    if (!change) {
      change = item === 'title'
        ? noteTitle.current.value.trim()
        : noteBody.current.value.trim()
    }

    if (change === data[item].trim()) return console.log('NoteEditor.updateNoteItem: No changes to make', item, change)

    updateNote(data.id, item, change)
  }

  const handleNoteStatusChange = event => {
    console.log('handleNoteStatusChange', event)
    if (data.status === 'new') {
      addNewNoteAndReset()
    }
    const newStatus = data.status === 'open'
      ? 'closed'
      : 'open'
    updateNoteItem('status', newStatus)
  }

  useEffect(() => {
    console.log('UseEffect: Selected, bodyVisible ', selected, bodyVisible)
    if (selected === bodyVisible) return console.log('selected === bodyVisible, ignoring')
    if (selected) {
      console.log('Selected & !bodyVisible. Setting bodyVisible to true')
      setBodyVisible(true)
      setTimeout(() => {
        noteTitle.current.focus()
        resizeTextarea(noteBody.current)
      }, 10)
    } else {
      console.log('Selected / bodyVisible different')
      resizeTextarea(noteBody.current, true)
      setTimeout(() => {
        setBodyVisible(false)
      }, 200)
    }
  }, [selected, bodyVisible])

  return (
    <div
      className={classnames(
        'note-editor-container',
        { selected })}
      onClick={selectThisNote}
    >
      <div className='note-editor'>
        <div className='note-editor-title'>
          <button
            className='note-status-toggle'
            onClick={handleNoteStatusChange}
          >
            {
              status === 'new'
                ? '+'
                : status === 'closed'
                  ? '☑'
                  : '☐'
            }
          </button>
          <input
            ref={noteTitle}
            className={classnames(
              'note-title-input',
              { 'status-closed': status === 'closed' }
            )}
            type='text'
            placeholder='New Note'
            defaultValue={data.title}
            onBlur={() => updateNoteItem('title')}
            disabled={readOnly}
            onKeyPress={handleKeyPress}
          />
        </div>

        <div
          ref={noteContainer}
          className={classnames(
            'note-editor-body',
            { selected: bodyVisible }
          )}
        >
          <textarea
            ref={noteBody}
            className='note-body'
            placeholder='A very important note!'
            defaultValue={data.body}
            disabled={readOnly}
            onInput={handleInput}
            onBlur={() => updateNoteItem('body')}
          />
        </div>
      </div>
    </div>
  )
}

export default NoteEditor
