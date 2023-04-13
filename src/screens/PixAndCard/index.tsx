import { Box, Button, Divider, Typography } from '@mui/material'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import { useMemo } from 'react'
import QrCode from 'src/assets/QrCode.svg'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import { AccordionCustom, buttonSx } from './styles'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import InstallmentSteps from 'src/components/PixCard/InstallmentSteps'
import { INSTALLMENT_STEPS } from './mockData'

const PixAndCard = () => {
  const renderAccordion = useMemo(
    () => (
      <AccordionCustom variant="outlined" sx={{ margin: '0px !important', border: 0 }}>
        <AccordionSummary
          id="accordion-summary"
          aria-controls="accordion-summary-content"
          expandIcon={<ExpandMoreIcon />}
          sx={{ padding: 0 }}
        >
          <Typography fontWeight={700} color="#4D4D4D">
            Como funciona?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0, marginBottom: '20px' }}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </AccordionCustom>
    ),
    []
  )

  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center">
      <Header title="João, pague a entrada de R$ 15.300,00 pelo Pix" />
      <Box border="2px solid #03D69D" padding="10px" borderRadius="10px">
        <img src={QrCode} alt="qr code" width={332} />
      </Box>
      <Button variant="contained" endIcon={<FileCopyIcon />} sx={buttonSx}>
        Clique para copiar o QR CODE
      </Button>
      <Box marginTop="20px">
        <Typography fontSize="16px" color="#B2B2B2">
          Prazo de pagamento:
        </Typography>
        <Typography fontSize="16px" color="#4D4D4D" fontWeight={800}>
          15/12/2021 - 08:17
        </Typography>
      </Box>
      <InstallmentSteps values={INSTALLMENT_STEPS} />
      <Box width="100%">
        <Divider sx={{ borderWidth: '1px' }} variant="fullWidth" />
      </Box>
      <Box width="100%" display="flex" justifyContent="space-between" marginY="20px">
        <Typography fontSize="14px" color="#4D4D4D">
          CET: 0,5%
        </Typography>
        <Typography fontSize="18px" color="#4D4D4D">
          Total: R$ 30.600,00
        </Typography>
      </Box>
      <Box width="100%">
        <Divider sx={{ borderWidth: '1px' }} variant="fullWidth" />
      </Box>
      {renderAccordion}
      <Box width="100%">
        <Divider sx={{ borderWidth: '1px' }} variant="fullWidth" />
      </Box>
      <Box marginTop="20px" textAlign="center">
        <Typography fontSize="14px" color="#B2B2B2">
          Identificador:
        </Typography>
        <Typography fontSize="14px" color="#4D4D4D" fontWeight={800}>
          2c1b951f356c4680b13ba1c9fc889c47
        </Typography>
      </Box>
      <Footer />
    </Box>
  )
}

export default PixAndCard
