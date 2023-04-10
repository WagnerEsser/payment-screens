import { Box } from '@mui/material'
import BoxWithBadge from './BoxWithBadge'
import { type Props } from './types'
import RadioSelector from 'src/components/RadioSelector'
import InstallmentValue from 'src/components/InstallmentValue'
import CashbackValue from 'src/components/CashbackValue'
import Ribbon from 'src/components/Ribbon'

const PaymentForm = (props: Props) => (
  <BoxWithBadge badgeText="Pix" {...props}>
    <Box display="flex" justifyContent="space-between">
      <InstallmentValue quantity="1x" value="R$ 30.500,00" />
      <Box display="flex" alignItems="center">
        <RadioSelector selected={props.selected} />
      </Box>
    </Box>
    <CashbackValue value="3%" />
    <Box marginTop="4px">
      <Ribbon value="R$ 300,00" />
    </Box>
  </BoxWithBadge>
)

export default PaymentForm
