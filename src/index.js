import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import quizApp from './reducers'
import App from './App'

let store = createStore(quizApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)