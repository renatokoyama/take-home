import { ThemeProvider, createGlobalStyle } from 'styled-components'
import React from 'styled-components/node_modules/@types/react'
import { theme } from './theme'
import { globalReset } from './globalReset'
import { globalTypography } from './globalTypography'

interface GlobalThemeProviderProps {
  children: React.ReactChild
}

export const GlobalThemeProvider = ({ children }: GlobalThemeProviderProps) => {
  const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    ${globalReset}
    ${globalTypography}
  `
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
