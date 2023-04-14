import { Box } from '@mui/material'
import FileCopyIcon from '@mui/icons-material/FileCopy'

import QrCodeImage from 'src/assets/QrCode.svg'
import CustomButton from 'src/components/CustomButton'

const QrCode = () => (
  <Box textAlign="center">
    <Box border="2px solid #03D69D" padding="10px" borderRadius="10px">
      <img src={QrCodeImage} alt="qr code" width={332} />
    </Box>
    <CustomButton title="Clique para copiar o QR CODE" endIcon={<FileCopyIcon />} />
  </Box>
)
export default QrCode
