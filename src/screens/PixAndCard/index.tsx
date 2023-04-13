import { Box, Button, Divider, Typography } from '@mui/material'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import { useMemo } from 'react'
import QrCode from 'src/assets/QrCode.svg'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import { buttonSx } from './styles'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Installment from 'src/components/PixCard/Installment'

const PixAndCard = () => {
  const renderAccordion = useMemo(
    () => (
      <Accordion sx={{ padding: '0px' }} elevation={0} style={{ padding: '0px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontWeight={700} color="#4D4D4D">
            Como funciona?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    ),
    []
  )

  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center" paddingX="20px">
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
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        paddingX="16px"
        marginTop="3px"
        marginBottom="20px"
      >
        <Installment description="1ª entrada no Pix" value="R$ 15.300,00" />
        <Installment description="2ª no cartão" value="R$ 15.300,00" />
      </Box>
      <Box width="100%">
        <Divider variant="fullWidth" />
      </Box>
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        marginY="20px"
        paddingX="16px"
      >
        <Typography fontSize="14px" color="#4D4D4D">
          CET: 0,5%
        </Typography>
        <Typography fontSize="18px" color="#4D4D4D">
          Total: R$ 30.600,00
        </Typography>
      </Box>
      {renderAccordion}
      <Box width="100%">
        <Divider variant="fullWidth" />
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
