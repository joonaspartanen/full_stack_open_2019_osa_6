
export const createAnecdote = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE',
    anecdote: anecdote
  }
}

export const handleVote = (id) => {
  return {
    type: 'VOTE',
    id: id
  }
}

export const initializeAnecdotes = (anecdotes => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
})

const anecdoteReducer = (state = [], action) => {
  console.log('action', action)
  switch (action.type) {
    case 'VOTE':
      const id = action.id
      const anecdoteToVote = state.find(a => a.id === id)
      const votedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : votedAnecdote
      )
    case 'NEW_ANECDOTE':
      return state.concat(action.anecdote)
    case 'INIT_ANECDOTES':
      return action.data
    default: return state
  }

}

export default anecdoteReducer