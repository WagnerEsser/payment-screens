import { Box } from '@mui/material'
import PixScreen from './screens/PixScreen'
import GlobalStyles from './styles/global'

const App = (): JSX.Element => (
  <Box
    display="flex"
    flexDirection="column"
    width="100%"
    height="100%"
    position="relative"
  >
    <GlobalStyles />
    <PixScreen />
  </Box>
)

export default App
