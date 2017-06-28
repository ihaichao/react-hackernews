import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.styl'
import App from './App'
import configureStore from './store/configureStore'
import Routes from './routes'

const store = configureStore()

// ReactDOM.render(<App />, document.getElementById('root'))

ReactDOM.render(
  <Provider store={store}>
     {Routes}
  </Provider>,
  document.getElementById('root')
);