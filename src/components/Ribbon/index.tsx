import { Typography } from '@mui/material'
import { type Props } from './types'
import { RibbonWrapper } from './styles'

const Ribbon = ({ value }: Props) => (
  <RibbonWrapper
    display="flex"
    alignItems="center"
    width="100%"
    color="white"
    padding="7px"
    sx={{ bgcolor: '#133A6F' }}
  >
    <Typography marginRight="5px" fontSize="14px">
      🤑
    </Typography>
    <Typography fontSize="16px" fontWeight={700} lineHeight="20px">
      {value}
    </Typography>
    <Typography fontSize="16px" lineHeight="20px">
      &nbsp;de volta no seu Pix na hora
    </Typography>
  </RibbonWrapper>
)

export default Ribbon
