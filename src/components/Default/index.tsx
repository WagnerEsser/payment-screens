import { Box } from '@mui/material'
import PixScreen from 'src/screens/PixScreen'
import GlobalStyle from 'src/styles/global'

const Default = () => (
  <Box display="flex" justifyContent="center">
    <GlobalStyle />
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      width="100%"
      maxWidth="470px"
      height="100vh"
    >
      <PixScreen />
    </Box>
  </Box>
)

export default Default
