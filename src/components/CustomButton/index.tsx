import { Button } from '@mui/material'
import { buttonSx } from './styles'
import { type Props } from './types'

const CustomButton = ({ title, ...props }: Props) => (
  <Button variant="contained" sx={buttonSx} {...props}>
    {title}
  </Button>
)
export default CustomButton
