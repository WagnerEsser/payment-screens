import { Box, Typography } from '@mui/material'
import { type Props } from './types'
import { Wrapper } from './styles'
import { useCallback } from 'react'

const BoxWithBadge = ({ badgeText, children, selected, changeSelected }: Props) => {
  const clickFormPayment = useCallback(() => {
    changeSelected((old) => !old)
  }, [])

  return (
    <Wrapper selected={selected} onClick={clickFormPayment}>
      <Box position="absolute" top={-14}>
        <Typography
          fontSize="18px"
          lineHeight="24px"
          fontWeight={700}
          paddingX="20px"
          borderRadius="100px"
          sx={{ bgcolor: '#E5E5E5' }}
        >
          {badgeText}
        </Typography>
      </Box>
      {children}
    </Wrapper>
  )
}

export default BoxWithBadge
