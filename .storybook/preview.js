import React from 'react'
import { GlobalThemeProvider } from 'src/lib/theme'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Provider } from 'react-redux'
import configureStore from 'src/state'
// Init all "fas" icons for components/Icon compatibility in Storybook (react-fontawesome)
library.add(fas)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  showPanel: true,
  panelPosition: 'bottom',
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#fff',
      },
      {
        name: 'grey',
        value: '#838C90',
      },
    ],
  },
}

const initialState = window.initialReduxState
const store = configureStore(initialState)
export const decorators = [
  (Story) => (
    <Provider store={store}>
      <GlobalThemeProvider>
        <Story />
      </GlobalThemeProvider>
    </Provider>
  ),
]
