import { Box, Typography } from '@mui/material'
import { type Props } from './types'
import Logo from 'src/assets/Logo.svg'

const Header = ({ title }: Props) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    marginTop="36px"
    marginBottom="20px"
  >
    <img src={Logo} alt="Logo" width={125} />
    <Box marginTop="40px">
      <Typography fontSize={24} fontWeight={700}>
        {title}
      </Typography>
    </Box>
  </Box>
)

export default Header
