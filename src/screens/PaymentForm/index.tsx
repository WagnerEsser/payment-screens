import { Box } from '@mui/material'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

const PaymentForm = () => {
  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center" paddingX="20px">
      <Header title="João, pague o restante em 1x no cartão" />

      <Footer />
    </Box>
  )
}

export default PaymentForm
