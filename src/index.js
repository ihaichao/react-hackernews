import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import './index.styl'
import App from './App'
import configureStore from './store/configureStore'
import routes from './routes'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
     {routes}
  </Provider>,
  document.getElementById('root')
)