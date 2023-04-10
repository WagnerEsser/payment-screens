import { ThemeProvider, createTheme } from '@mui/material'
import Default from './components/Default'

const theme = createTheme({
  typography: {
    fontFamily: 'Nunito'
  }
})

const App = () => (
  <ThemeProvider theme={theme}>
    <Default />
  </ThemeProvider>
)

export default App
