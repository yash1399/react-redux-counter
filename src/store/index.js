import {createStore, combineReducers} from 'redux';

import counter from './counter';


const reducers = combineReducers({
  counter
})

export default createStore(reducers)