import { Box, ThemeProvider, createTheme } from '@mui/material'
import PixScreen from './screens/PixScreen'
import GlobalStyles from './styles/global'

const theme = createTheme({
  typography: {
    fontFamily: 'Nunito'
  }
})

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Box display="flex" flexDirection="column" width="100%" height="100%" position="relative">
      <GlobalStyles />
      <PixScreen />
    </Box>
  </ThemeProvider>
)

export default App
