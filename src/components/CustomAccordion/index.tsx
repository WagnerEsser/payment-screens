import { Typography } from '@mui/material'

import { AccordionCustom } from './styles'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const CustomAccordion = () => (
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
        amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
  </AccordionCustom>
)

export default CustomAccordion
