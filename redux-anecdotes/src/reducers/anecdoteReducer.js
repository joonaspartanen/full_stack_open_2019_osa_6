import anecdoteService from '../services/anecdotes'

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      anecdote: newAnecdote
    })
  }
}

export const handleVote = (id) => {
  return async dispatch => {
    const anecdoteToVote = await anecdoteService.getById(id)
    const votedAnecdote = {
      ...anecdoteToVote,
      votes: anecdoteToVote.votes + 1
    }
    await anecdoteService.update(id, votedAnecdote)
    dispatch({
      type: 'VOTE',
      anecdote: votedAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  console.log('action', action)
  switch (action.type) {
    case 'VOTE':
      return state.map(a =>
        a.id !== action.anecdote.id ? a : action.anecdote
      )
    case 'NEW_ANECDOTE':
      return state.concat(action.anecdote)
    case 'INIT_ANECDOTES':
      return action.data
    default: return state
  }

}

export default anecdoteReducer