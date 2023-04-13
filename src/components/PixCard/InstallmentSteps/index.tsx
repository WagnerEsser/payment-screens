import { Box, Typography } from '@mui/material'
import { type Props } from './types'
import { type InstallmentStep } from 'src/screens/PixAndCard/types'
import RadioSelector from 'src/components/PaymentFormCard/RadioSelector'

const getState = (step: InstallmentStep) => {
  if (!step.current && !step.done) return <RadioSelector size={16} />
  if (step.current) return <RadioSelector beforeSelected size={16} />
  if (step.done) return <RadioSelector selected size={16} />
}

const InstallmentSteps = ({ values }: Props) => (
  <Box
    display="flex"
    flexDirection="column"
    width="100%"
    paddingX="16px"
    marginTop="3px"
    marginBottom="20px"
  >
    {values.map((step, index) => {
      const nextItem = !!values[index + 1]

      return (
        <Box position="relative" display="flex" width="100%" marginTop="15px" key={index}>
          {nextItem && (
            <Box
              position="absolute"
              top={12}
              left={7}
              height="42px"
              borderLeft="2px solid #E5E5E5"
              zIndex={100}
            />
          )}
          <Box marginTop="4px" marginRight="8px" zIndex={200}>
            {getState(step)}
          </Box>
          <Box position="relative" display="flex" flex={1} justifyContent="space-between">
            <Typography fontSize="18px" color="#4D4D4D" noWrap>
              {step.description}
            </Typography>
            <Typography fontSize="18px" color="#4D4D4D" fontWeight={800} flexShrink={0}>
              {step.value}
            </Typography>
          </Box>
        </Box>
      )
    })}
  </Box>
)

export default InstallmentSteps
