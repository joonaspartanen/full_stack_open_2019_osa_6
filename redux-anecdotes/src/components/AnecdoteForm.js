import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setSuccessNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteForm = ({ store }) => {

  const addAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    store.dispatch(createAnecdote(anecdote))
    store.dispatch(setSuccessNotification(`New anecdote '${anecdote}' added`))
    setTimeout(() => {
      store.dispatch(clearNotification())
    }, 5000)

  }

  return (
    <form onSubmit={addAnecdote}>
      <div><input name="anecdote" /></div>
      <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm