import { Box } from '@mui/material'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import InstallmentSteps from 'src/components/InstallmentSteps'
import { INSTALLMENT_STEPS } from './dataMock'
import HashId from 'src/components/HashId'
import CustomDivider from 'src/components/CustomDivider'
import PaymentTerm from 'src/components/PaymentTerm'
import TotalInfo from 'src/components/TotalInfo'
import CustomAccordion from 'src/components/CustomAccordion'
import Form from 'src/components/Form'

const PaymentForm = () => (
  <Box width="100%" display="flex" flexDirection="column" alignItems="center" paddingX="20px">
    <Header title="João, pague o restante em 1x no cartão" />
    <Form />
    <PaymentTerm />
    <InstallmentSteps values={INSTALLMENT_STEPS} />
    <CustomDivider />
    <TotalInfo />
    <CustomDivider />
    <CustomAccordion />
    <CustomDivider />
    <HashId />
    <Footer />
  </Box>
)

export default PaymentForm
