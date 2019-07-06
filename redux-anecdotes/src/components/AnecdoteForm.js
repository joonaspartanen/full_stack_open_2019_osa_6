import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setSuccessNotification, clearNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {

  const addAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(anecdote)
    props.setSuccessNotification(`New anecdote '${anecdote}' added`)
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