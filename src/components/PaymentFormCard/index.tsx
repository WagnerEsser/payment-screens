import { Box, Typography } from '@mui/material'
import WrapperBox from './WrapperBox'
import { type Props } from './types'
import RadioSelector from 'src/components/PaymentFormCard/RadioSelector'
import InstallmentValue from 'src/components/PaymentFormCard/InstallmentValue'
import CashbackValue from 'src/components/PaymentFormCard/CashbackValue'
import Ribbon from 'src/components/PaymentFormCard/Ribbon'

const PaymentFormCard = (props: Props) => {
  const { values, selected, ribbonContent } = props
  const { installment, installmentValue, total, cashbackPercent } = values

  return (
    <WrapperBox {...props}>
      <Box>
        <Box display="flex" justifyContent="space-between">
          <InstallmentValue quantity={installment} value={installmentValue} />
          <Box display="flex" alignItems="center">
            <RadioSelector size={26} selected={selected} />
          </Box>
        </Box>
        {cashbackPercent && <CashbackValue value={cashbackPercent} />}
        {total && <Typography color="#AFAFAF">Total: {total}</Typography>}
        {ribbonContent && (
          <Box marginTop="4px">
            <Ribbon content={ribbonContent} />
          </Box>
        )}
      </Box>
    </WrapperBox>
  )
}

export default PaymentFormCard
