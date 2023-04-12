import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

const Menu = () => (
  <Box>
    <Link to="/payment-method">Método de pagamento</Link>
    <Link to="/pix-card">Pix + Cartão</Link>
    <Link to="/payment-form">Formulário de pagamento</Link>
  </Box>
)

export default Menu
