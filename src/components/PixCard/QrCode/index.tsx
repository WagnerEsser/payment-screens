import { Box, Button } from '@mui/material'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import { buttonSx } from './styles'
import QrCodeImage from 'src/assets/QrCode.svg'

const QrCode = () => (
  <Box>
    <Box border="2px solid #03D69D" padding="10px" borderRadius="10px">
      <img src={QrCodeImage} alt="qr code" width={332} />
    </Box>
    <Button variant="contained" endIcon={<FileCopyIcon />} sx={buttonSx}>
      Clique para copiar o QR CODE
    </Button>
  </Box>
)
export default QrCode
