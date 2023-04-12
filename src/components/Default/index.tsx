import { Box } from '@mui/material'
import GlobalStyle from 'src/styles/global'
import { type Props } from './types'
import Menu from 'src/components/Menu'

const Default = ({ children }: Props) => (
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
      <Menu />
      {children}
    </Box>
  </Box>
)

export default Default
