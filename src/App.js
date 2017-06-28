import React, { Component } from 'react'
import NewsHeader from './components/NewsHeader/NewsHeader'
import NewsList from './containers/NewsList/NewsList'

class App extends Component {
  render() {
    return (
      <div className="app">
        <NewsHeader></NewsHeader>
        <NewsList></NewsList>
      </div>
    )
  }
}

export default App
