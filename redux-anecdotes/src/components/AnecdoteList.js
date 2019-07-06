import React from 'react'
import { handleVote } from '../reducers/anecdoteReducer'
import { setSuccessNotification, clearNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {

  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    props.handleVote(anecdote.id)
    props.setSuccessNotification(`You voted for '${anecdote.content}'`)
    setTimeout(() => {
      props.clearNotification()
    }, 5000)
  }

  return (
    props.anecdotesToShow.map(anecdote =>
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

const anecdotesToShow = ({ anecdotes, filter }) => {
  if (filter === '') {
    return anecdotes.sort((a, b) => b.votes - a.votes)
  }
  return anecdotes
    .filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => b.votes - a.votes)
}

const mapStateToProps = (state) => {
  return {
    anecdotesToShow: anecdotesToShow(state),
    filter: state.filter,
  }
}

const mapDispatchToProps = {
  handleVote,
  setSuccessNotification,
  clearNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)