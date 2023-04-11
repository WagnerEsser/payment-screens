import { Box, Typography } from '@mui/material'
import { type Props } from './types'
import { Wrapper } from './styles'
import { useCallback } from 'react'

const WrapperBox = ({ badgeText, children, selected, changeSelected, qtyItems }: Props) => {
  const clickFormPayment = useCallback(() => {
    changeSelected((old) => !old)
  }, [changeSelected])

  return (
    <Wrapper selected={selected} onClick={clickFormPayment} qtyItems={qtyItems ?? 0}>
      {badgeText && (
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
      )}
      {children}
    </Wrapper>
  )
}

export default WrapperBox
