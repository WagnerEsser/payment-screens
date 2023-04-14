import { Autocomplete, Box, TextField } from '@mui/material'

import { AUTOCOMPLETE_PROPS, FIELDS, fieldStyle } from './dataMock'
import CustomButton from 'src/components/CustomButton'

const Form = () => (
  <Box display="flex" flexWrap="wrap">
    {FIELDS.slice(0, 3).map((props, index) => (
      <TextField key={index} {...props} />
    ))}
    <Box display="flex" justifyContent="space-between">
      <TextField {...FIELDS[3]} />
      <TextField {...FIELDS[4]} />
    </Box>
    <Autocomplete
      {...AUTOCOMPLETE_PROPS}
      renderInput={(params) => (
        <TextField {...params} label={AUTOCOMPLETE_PROPS.label} sx={fieldStyle} />
      )}
    />
    <CustomButton title="Pagar" fullWidth />
  </Box>
)

export default Form
