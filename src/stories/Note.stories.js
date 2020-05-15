import React from 'react'

// Components
import NoteList from 'components/Note/NoteList'
import Note from 'components/Note/Note'
// Helpers
import { action } from '@storybook/addon-actions'
import Center from 'stories/helpers/center'
// Styles
import 'styles/main.scss'
// Data
import notes from 'data/notes.json'

export default {
  title: 'Note',
  component: NoteList
}

export const noteList = () => {
  return (
    <Center>
      <NoteList list={notes} />
    </Center>
  )
}

export const inactiveNote = () => {
  return (
    <Center>
      <div>
        <h2>Open</h2>
        <Note data={notes[1]} />
      </div>
      <div>
        <h2>Closed</h2>
        <Note data={notes[0]} />
      </div>
    </Center>
  )
}

export const activeNote = () => {
  return (
    <Center>
      <div>
        <h2>Open</h2>
        <Note data={notes[1]} selected selectNote={action('Note selected')} />
      </div>
      <div>
        <h2>Closed</h2>
        <Note data={notes[0]} selected selectNote={action('Note selected')} />
      </div>
    </Center>
  )
}

inactiveNote.story = {
  name: 'Note - inactive'
}
activeNote.story = {
  name: 'Note - active'
}
