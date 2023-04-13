import { Box } from '@mui/material'
import checkIcon from 'src/assets/Check.svg'
import { type Props } from './types'

const getBorder = (beforeSelected: Props['beforeSelected'], selected: Props['selected']) => {
  if (beforeSelected) return '2px solid #03D69D'
  if (!selected) return '2px solid #E5E5E5'
  return undefined
}

const RadioSelector = ({ size, beforeSelected, selected }: Props) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    width={size + 'px'}
    height={size + 'px'}
    borderRadius="100%"
    border={getBorder(beforeSelected, selected)}
    sx={{ bgcolor: selected ? '#03D69D' : 'white' }}
  >
    {selected && <img src={checkIcon} alt="check-icon" width={size * 0.42} />}
  </Box>
)

export default RadioSelector
