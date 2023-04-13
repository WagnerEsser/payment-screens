import { Box } from '@mui/material'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

const PixAndCard = () => {
  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center" paddingX="20px">
      <Header title="João, pague a entrada de R$ 15.300,00 pelo Pix" />

      <Footer />
    </Box>
  )
}

export default PixAndCard
