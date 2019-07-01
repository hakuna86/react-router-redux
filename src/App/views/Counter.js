import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../modules/counter'
import { bindActionCreators } from 'redux';

function Counter (props) {
  return(
    <div>
      <div>Counter: {props.count}</div>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  )
}

const mapStateToProps = state => ({
  count: state.counter.counter,
})

const mapDispatchToProps = dispatch => ({
  increment: bindActionCreators(increment, dispatch),
  decrement: bindActionCreators(decrement, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
