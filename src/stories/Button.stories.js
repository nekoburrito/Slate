import React from 'react'
import { action } from '@storybook/addon-actions'

// Components
import ButtonStack from 'components/Button/ButtonStack'
import Button from 'components/Button/Button'
// Helpers
import Center from 'stories/helpers/center'
// Styles
import 'styles/main.scss'

export default {
  title: 'Button',
  component: Button
}

export const buttonStack = () => (
  <Center>
    <h2>align='left'</h2>
    <ButtonStack align='left' fullWidth>
      <Button size='xsm' onClick={action('Clicked xsm')}>Click Me!</Button>
      <Button size='sm' onClick={action('Clicked sm')}>Click Me!</Button>
      <Button size='md' onClick={action('Clicked md')}>Click Me!</Button>
      <Button size='lg' onClick={action('Clicked lg')}>Click Me!</Button>
      <Button size='xlg' onClick={action('Clicked xlg')}>Click Me!</Button>
    </ButtonStack>
    <br />
    <h2>align='center'</h2>
    <ButtonStack align='center' fullWidth>
      <Button size='xsm' onClick={action('Clicked xsm')}>Click Me!</Button>
      <Button size='sm' onClick={action('Clicked sm')}>Click Me!</Button>
      <Button size='md' onClick={action('Clicked md')}>Click Me!</Button>
      <Button size='lg' onClick={action('Clicked lg')}>Click Me!</Button>
      <Button size='xlg' onClick={action('Clicked xlg')}>Click Me!</Button>
    </ButtonStack>
    <br />
    <h2>align='right'</h2>
    <ButtonStack align='right' fullWidth>
      <Button size='xsm' onClick={action('Clicked xsm')}>Click Me!</Button>
      <Button size='sm' onClick={action('Clicked sm')}>Click Me!</Button>
      <Button size='md' onClick={action('Clicked md')}>Click Me!</Button>
      <Button size='lg' onClick={action('Clicked lg')}>Click Me!</Button>
      <Button size='xlg' onClick={action('Clicked xlg')}>Click Me!</Button>
    </ButtonStack>
  </Center>
)

export const button = () => (
  <ButtonStack align='center' fullWidth>
    <Button>Button</Button>
    <Button classes='btn-link'>Button Link</Button>
    <Button classes='no-border'>No Border</Button>
    <Button classes='outline'>Outline</Button>
  </ButtonStack>
)
