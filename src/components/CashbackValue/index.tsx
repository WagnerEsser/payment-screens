import { Box, Typography } from '@mui/material'
import { type Props } from './types'

const CashbackValue = ({ value }: Props) => (
  <Box display="flex">
    <Typography color="#03D69D">Ganhe</Typography>
    <Typography color="#03D69D" fontWeight={700}>
      &nbsp;{value}
    </Typography>
    <Typography color="#03D69D">&nbsp;de Cashback</Typography>
  </Box>
)

export default CashbackValue
