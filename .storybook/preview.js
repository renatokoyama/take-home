import React from 'react'
import { GlobalThemeProvider } from 'src/lib/theme'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

// Init all "fas" icons for components/Icon compatibility in Storybook (react-fontawesome)
library.add(fas)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
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

export const decorators = [
  (Story) => (
    <GlobalThemeProvider>
      <Story />
    </GlobalThemeProvider>
  ),
]
