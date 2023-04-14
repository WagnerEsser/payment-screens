import { type TextFieldProps } from '@mui/material'

const PAYMENT_INFO = {
  name: 'João Linaldo Dias Fraga Santos',
  cpf: '405.503.503-15',
  cardNumber: '1234 5678 9123 45678',
  expiration: '10/11',
  cvv: '405',
  installments: [
    '1x de 15.300,00',
    '2x de 7.879,50',
    '3x de 5.304,00',
    '4x de 4.016,25',
    '5x de 3.243,60'
  ]
}

export const fieldStyle = {
  '& > label': {
    fontSize: '18px'
  },
  '& > div': {
    fontSize: '18px',
    height: '65px',
    border: '2px solid #E5E5E5',
    borderRadius: '8px'
  },
  '& * fieldset': {
    border: '0px'
  }
}

export const FIELDS: TextFieldProps[] = [
  {
    id: 'name',
    label: 'Nome completo',
    variant: 'outlined',
    value: PAYMENT_INFO.name,
    fullWidth: true,
    sx: fieldStyle
  },
  {
    id: 'cpf',
    label: 'CPF',
    variant: 'outlined',
    value: PAYMENT_INFO.cpf,
    fullWidth: true,
    sx: { ...fieldStyle, mt: 3 }
  },
  {
    id: 'card-number',
    label: 'Número do cartão',
    variant: 'outlined',
    value: PAYMENT_INFO.cardNumber,
    fullWidth: true,
    sx: { ...fieldStyle, mt: 3 }
  },
  {
    id: 'expiration',
    label: 'Vencimento',
    variant: 'outlined',
    value: PAYMENT_INFO.expiration,
    sx: { ...fieldStyle, mt: 3, marginRight: '11px' }
  },
  {
    id: 'cvv',
    label: 'CVV',
    variant: 'outlined',
    value: PAYMENT_INFO.cvv,
    sx: { ...fieldStyle, mt: 3, marginLeft: '11px' }
  }
]

export const AUTOCOMPLETE_PROPS = {
  id: 'combo-box-demo',
  label: 'Parcelas',
  value: PAYMENT_INFO.installments[0],
  disablePortal: true,
  options: PAYMENT_INFO.installments,
  sx: { width: '100%', mt: 3, fieldStyle }
}
