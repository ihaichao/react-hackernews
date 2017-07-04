import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.styl'
import configureStore from './store/configureStore'
import routes from './routes'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
)