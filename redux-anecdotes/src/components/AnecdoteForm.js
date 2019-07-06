import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setSuccessNotification, clearNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    props.createAnecdote(newAnecdote)
    props.setSuccessNotification(`New anecdote '${newAnecdote.content}' added`)
    setTimeout(() => {
      props.clearNotification()
    }, 5000)

  }

  return (
    <form onSubmit={addAnecdote}>
      <div><input name="anecdote" /></div>
      <button type="submit">create</button>
    </form>
  )
}

const mapDispatchToProps = {
  createAnecdote,
  setSuccessNotification,
  clearNotification
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)