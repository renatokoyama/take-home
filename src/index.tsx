import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

// Init all "fas" icons for react-fontawesome
library.add(fas)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
