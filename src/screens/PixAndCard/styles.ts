import { Accordion } from '@mui/material'
import styled from 'styled-components'

export const buttonSx = {
  height: '40px',
  bgcolor: '#133A6F',
  marginTop: '20px',
  textTransform: 'none',
  borderRadius: '8px',
  paddingX: '18px',
  fontSize: '18px',
  fontWeight: 400
}

export const AccordionCustom = styled(Accordion)`
  :before {
    background-color: unset !important;
  }
`
