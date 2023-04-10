import { Box, Typography } from '@mui/material'
import BoxWithBadge from './BoxWithBadge'
import { type Props } from './types'

const PaymentForm = (props: Props) => (
  <BoxWithBadge badgeText="Pix" {...props}>
    <Box display="flex">
      <Typography fontSize={24} fontWeight={800}>
        1x
      </Typography>
      <Typography fontSize={24}>&nbsp;R$ 30.500,00</Typography>
    </Box>
    <Box display="flex">
      <Typography color="#03D69D">Ganhe</Typography>
      <Typography color="#03D69D" fontWeight={800}>
        &nbsp;3%
      </Typography>
      <Typography color="#03D69D">&nbsp;de Cashback</Typography>
    </Box>
  </BoxWithBadge>
)

export default PaymentForm
