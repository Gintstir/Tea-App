// Create and export the Redux store
// As you can see, store is the result of calling createStore,
// a function from the Redux library. createStore takes a reducer
// as the first argument and in our case we passed in reducer


import { createStore } from 'redux';
import reducer from './reducers'

const store = createStore(reducer);

export default store;