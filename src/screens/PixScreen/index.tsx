import { Box } from '@mui/material'
import { useState } from 'react'
import Header from 'src/components/Header'
import PaymentForm from 'src/components/PaymentForm'

const PixScreen = () => {
  const [paymentSelected, setPaymentSelected] = useState(false)

  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center" paddingX="20px">
      <Header title="João, como você quer pagar?" />
      <Box marginTop="10px">
        <PaymentForm selected={paymentSelected} changeSelected={setPaymentSelected} />
      </Box>
    </Box>
  )
}

export default PixScreen
