import { Box, Tab, Tabs } from '@mui/material'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'src/App'

const tabProps = (index: number) => ({
  id: `tab-${index}`,
  'aria-controls': `tabpanel-${index}`
})

const Menu = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState(0)

  const handleChange = useCallback(
    (_event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
      navigate('/' + ROUTES[newValue + 1].path)
    },
    [navigate]
  )

  return (
    <Box width="100%" textAlign="center">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="menu tabs" centered>
          <Tab label="Método de pagamento" {...tabProps(0)} />
          <Tab label="Pix + Cartão" {...tabProps(1)} />
          <Tab label="Formulário de pagamento" {...tabProps(2)} />
        </Tabs>
      </Box>
    </Box>
  )
}

export default Menu
