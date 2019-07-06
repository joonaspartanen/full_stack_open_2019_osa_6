import React from 'react'
import { filterChange } from '../reducers/filterReducer';
import { connect } from 'react-redux'

const Filter = (props) => {
  const handleChange = (event) => {
    props.filterChange(event.target.value)
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes
  }
}

const mapDispatchToProps = {
  filterChange
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)