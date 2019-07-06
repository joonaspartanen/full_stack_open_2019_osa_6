import React from 'react'
import { handleVote } from '../reducers/anecdoteReducer'


const AnecdoteList = (props) => {

  const store = props.store

  const anecdotes = store.getState()

  const vote = (id) => {
    console.log('vote', id)
    store.dispatch(handleVote(id))
  }

  return (
    anecdotes
      .sort((a, b) => b.votes - a.votes)
      .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )
  )
}

export default AnecdoteList