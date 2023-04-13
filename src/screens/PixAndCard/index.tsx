import { Box } from '@mui/material'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import InstallmentSteps from 'src/components/PixCard/InstallmentSteps'
import { INSTALLMENT_STEPS } from './mockData'
import HashId from 'src/components/HashId'
import CustomDivider from 'src/components/CustomDivider'
import QrCode from 'src/components/PixCard/QrCode'
import PaymentTerm from 'src/components/PaymentTerm'
import TotalInfo from 'src/components/TotalInfo'
import CustomAccordion from 'src/components/PixCard/CustomAccordion'

const PixAndCard = () => (
  <Box width="100%" display="flex" flexDirection="column" alignItems="center">
    <Header title="João, pague a entrada de R$ 15.300,00 pelo Pix" />
    <QrCode />
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

export default PixAndCard
