import React from 'react';
import { bindActionCreators } from 'redux';
import { incrementCounterAction, decerementCounterAction} from './store/counter';
import { connect } from 'react-redux';
import './App.css';


function App(props) {
  const {counter, increment, decrement} = props;
  return (
    <div >
      <div className="header"> Count:{counter}</div>
      <div className="App-header">
      <button className="space" onClick={() => { increment() }}>+</button>
      <p className="space" >{counter}</p>
      <button className="space"  onClick={() => { decrement() }}>-</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
 return{
   counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    increment: incrementCounterAction,
    decrement : decerementCounterAction
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
