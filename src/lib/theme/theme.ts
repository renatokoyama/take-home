declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

export interface Theme {
  colors: {
    white: string
    primary: string[]
    secondary: string[]
    greyscale: string[]
    success: string[]
    warning: string
    danger: string
  }
  fonts: {
    primary: string
  }
}

export const theme: Theme = {
  colors: {
    // Brand
    white: '#fff',
    primary: [
      '#0A43D2',
      '#04122B',
      '#051F4D',
      '#12358E',
      '#8C9DC9',
      '#C0D0F9',
      '#DAE2F9',
      '#DEE7FF',
      '#EFF3FF',
      '#FBFCFF',
    ],
    secondary: [
      '#FF813E',
      '#310F04',
      '#601D09',
      '#DA6E4D',
      '#FFA58A',
      '#FEC3B1',
      '#FFD1C3',
      '#FFE4DC',
      '#FFF2EE',
      '#FFF2EE',
    ],
    greyscale: [
      '#000000',
      '#1C1C1C',
      '#242424',
      '#5E5E5E',
      '#717171',
      '#8D8D8D',
      '#C4C4C4',
      '#EBECF0',
      '#E2E2E2',
      '#FFFFFF',
    ],
    success: ['#60BE4B', ''],
    warning: '#F0D406',
    danger: '#EB5B42',
  },
  fonts: {
    primary: `'Inter', apple-system, BlinkMacSystemFont, 'Helvetica Neue',
    helvetica, rial, sans-serif`,
  },
}
