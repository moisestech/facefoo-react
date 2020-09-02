import * as React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'

// Component
// State
// Lifecycle
// UI

// Your UI is a function of your state

function App () {
  return (
    <div className='app'>
      <Header />

      <div className='app-body'>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)