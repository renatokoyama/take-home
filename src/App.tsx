import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import { GlobalThemeProvider } from './lib/theme'
import TaskBoard from './pages/TaskBoard'
import configureStore from './state'

const initialState = (window as any).initialReduxState
const store = configureStore(initialState)

function App() {
  return (
    <Provider store={store}>
      <GlobalThemeProvider>
        <TaskBoard />
      </GlobalThemeProvider>
    </Provider>
  )
}

export default App
