import { Box, Typography } from '@mui/material'
import { type Props } from './types'
import ReactLogo from 'src/assets/logo.svg'

const Header = ({ title }: Props) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    marginTop="36px"
    marginBottom="20px"
  >
    <img src={ReactLogo} alt="Logo" width={125} />
    <Box marginTop="40px">
      <Typography fontSize={24} fontWeight={700}>
        {title}
      </Typography>
    </Box>
  </Box>
)

export default Header
