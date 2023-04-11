import { Box, Typography } from '@mui/material'
import Secure from 'src/assets/Secure.svg'
import LogoFooter from 'src/assets/LogoFooter.svg'

const Footer = () => (
  <Box display="flex" marginTop="41px" marginBottom="27px" fontWeight={300}>
    <img src={Secure} alt="Secure" width={15} />

    <Typography fontSize="14px" color="#B2B2B2" marginX="5px">
      Pagamento 100% seguro via:
    </Typography>

    <Box>
      <img src={LogoFooter} alt="LogoFooter" width={57} />
    </Box>
  </Box>
)
export default Footer
