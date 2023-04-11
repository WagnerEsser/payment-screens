import { Box, Typography } from '@mui/material'
import { type Props } from './types'

const InstallmentValue = ({ quantity, value }: Props) => (
  <Box display="flex">
    <Typography fontSize={24} fontWeight={700}>
      {quantity}
    </Typography>
    <Typography fontSize={24}>&nbsp;{value}</Typography>
  </Box>
)

export default InstallmentValue
