import { Box, Typography } from '@mui/material'
import { type Props } from './types'

const Installment = ({ description, value }: Props) => (
  <Box width="100%" marginTop="15px">
    <Box display="flex" justifyContent="space-between">
      <Typography fontSize="18px" color="#4D4D4D">
        {description}
      </Typography>
      <Typography fontSize="18px" color="#4D4D4D" fontWeight={800}>
        {value}
      </Typography>
    </Box>
  </Box>
)

export default Installment
