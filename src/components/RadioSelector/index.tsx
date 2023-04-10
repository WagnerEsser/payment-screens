import { Box } from '@mui/material'
import checkIcon from 'src/assets/Check.svg'
import { type Props } from './types'

const RadioSelector = ({ selected }: Props) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    width="26px"
    height="26px"
    borderRadius="100%"
    border={!selected ? '2px solid #E5E5E5' : undefined}
    sx={{ bgcolor: selected ? '#03D69D' : 'white' }}
  >
    {selected && <img src={checkIcon} alt="check-icon" />}
  </Box>
)

export default RadioSelector
