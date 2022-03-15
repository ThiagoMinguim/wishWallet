import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    background: '#13152a',
    button: {
      confirm: '#aa33b5',
      cancel: '#646464',
      remove: '#920000'
    },
    text: {
      primary: '#ffffff'
    }
  },
  fonts: {
    heading: '"Roboto", sans-serif',
    body: '"Roboto", sans-serif'
  },
  styles: {
    global: {
      body: {
        bg: 'background'
      }
    }
  }
})
