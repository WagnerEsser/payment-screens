import { Box } from '@mui/material'
import GlobalStyle from 'src/styles/global'
import { type Props } from './types'
import Menu from 'src/components/Menu'

const Default = ({ children }: Props) => (
  <Box display="flex" alignItems="center" flexDirection="column">
    <GlobalStyle />
    <Menu />
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      width="100%"
      maxWidth="470px"
      height="100vh"
    >
      {children}
    </Box>
  </Box>
)

export default Default
