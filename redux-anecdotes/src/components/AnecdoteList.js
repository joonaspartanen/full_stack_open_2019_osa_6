import React from 'react'
import { handleVote } from '../reducers/anecdoteReducer'
import { setSuccessNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

  const store = props.store

  const { anecdotes, filter } = store.getState()

  const anecdotesToShow = () => {
    if (filter === '') {
      return anecdotes
    }
    return anecdotes.filter(a => a.content.toLowerCase().includes(filter))
  }

  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    store.dispatch(handleVote(anecdote.id))
    store.dispatch(setSuccessNotification(`You voted for '${anecdote.content}'`))
    setTimeout(() => {
      store.dispatch(clearNotification())
    }, 5000)
  }

  return (
    anecdotesToShow()
      .sort((a, b) => b.votes - a.votes)
      .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )
  )
}

export default AnecdoteList