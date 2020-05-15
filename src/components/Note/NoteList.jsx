import React from 'react'

import Note from 'components/Note/Note'
import NewNote from 'components/Note/NewNote'
import Button from 'components/Button/Button'
import ButtonStack from 'components/Button/ButtonStack'

export default class NoteList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedNoteID: 0,
      showCompletedNotes: false,
      notes: this.props.list
    }
  }

  deselectNote = noteID => {
    if (this.state.selectedNoteID === noteID) {
      this.setState({ selectedNoteID: 0 })
    }
  }

  handleToggleCompleted = () => {
    this.setState({ showCompletedNotes: !this.state.showCompletedNotes })
  }

  selectNote = noteID => {
    if (this.state.selectedNoteID === noteID) return
    this.setState({ selectedNoteID: noteID })
  }

  addNewNote = (title, body) => {
    // find highest id
    const highestID = this.state.notes.map(n => n.id).reduce((a, b) => a < b ? b : a)
    const newNoteID = highestID + 1
    const noteData = { 
      id: newNoteID, 
      title,
      body,
      status: 'open',
      uuid: Date.now()
    }
    this.state.notes.push(noteData)
    this.selectNote(newNoteID)
  }

  updateNote = (noteID, item, change) => {
    console.log('NoteList.updateNote', noteID, item, change)
    const notes = this.state.notes.map(note => 
        note.id !== noteID
          ? note
          : {
            ...note,
            [item]: change
          }
      )
    this.setState({ notes: notes })
  }

  render() {
    const notes = this.state.notes.sort((a, b) => a.id < b.id)
    const noteList = this.state.showCompletedNotes
      ? notes
      : notes.filter(note => note.status !== 'closed')

    return (
      <div className='note-list'>
        <ButtonStack align='left'>
          <Button
            size='xsm'
            classes='only-hover'
            onClick={this.handleToggleCompleted}
          >
            {
              this.state.showCompletedNotes
                ? 'Hide Completed'
                : 'Show Completed'
            }
          </Button>
        </ButtonStack>
        <NewNote addNewNote={this.addNewNote} selectNote={this.selectNote} />
  
        {
          noteList.map(note =>
            <Note
              key={note.uuid}
              data={note}
              selected={note.id === this.state.selectedNoteID}
              readOnly={note.status === 'closed'}
              selectNote={this.selectNote}
              updateNote={this.updateNote}
              deselectNote={this.deselectNote}
            />
          )
        }
      </div>
    )
  }
}
