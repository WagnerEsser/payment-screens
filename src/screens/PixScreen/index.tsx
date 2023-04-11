import { Box, Typography } from '@mui/material'
import { useMemo, useState, useCallback } from 'react'
import Header from 'src/components/Header'
import PaymentFormCard from 'src/components/PaymentFormCard'
import { type Installment } from './types'
import { WrapperList } from './styles'
import { INSTALLMENTS } from './dataMock'
import Footer from 'src/components/Footer'

const PixScreen = () => {
  const installments: Installment[] = INSTALLMENTS
  const firstInstallment = installments[0]
  const otherInstallments = installments.slice(1)
  const [paymentSelected, setPaymentSelected] = useState<number | undefined>(undefined)

  const changeSelected = useCallback((index?: number) => {
    setPaymentSelected((old) => (old === index ? undefined : index))
  }, [])

  const renderPix = useMemo(
    () => (
      <PaymentFormCard
        badgeText="Pix"
        selected={paymentSelected === 0}
        values={{
          installment: '1x',
          installmentValue: firstInstallment.value,
          cashbackPercent: firstInstallment.cashback?.percent
        }}
        changeSelected={() => {
          changeSelected(0)
        }}
        ribbonContent={
          <Box display="flex" alignItems="center">
            <Typography marginRight="5px" fontSize="14px">
              🤑
            </Typography>
            <Typography fontSize="16px" fontWeight={700} lineHeight="20px">
              {firstInstallment.cashback?.value}
            </Typography>
            <Typography fontSize="16px" lineHeight="20px" fontWeight={300}>
              &nbsp;de volta no seu Pix na hora
            </Typography>
          </Box>
        }
      />
    ),
    [
      changeSelected,
      firstInstallment.cashback?.percent,
      firstInstallment.cashback?.value,
      firstInstallment.value,
      paymentSelected
    ]
  )

  const renderInstallments = otherInstallments.map((item: Installment, index: number) => {
    const newIndex = index + 2

    return (
      <PaymentFormCard
        key={newIndex}
        badgeText={newIndex === 2 ? 'Pix Parcelado' : undefined}
        selected={paymentSelected === newIndex}
        qtyItems={otherInstallments.length}
        values={{
          installment: newIndex + 'x',
          installmentValue: item.value,
          total: item.total
        }}
        changeSelected={() => {
          changeSelected(newIndex)
        }}
        ribbonContent={
          item.better ? (
            <Box display="flex" alignItems="center">
              <Typography fontSize="16px" fontWeight={700} lineHeight="20px">
                {item.better} de juros:
              </Typography>
              <Typography fontSize="16px" lineHeight="20px" fontWeight={300}>
                &nbsp;Melhor opção de parcelamento
              </Typography>
            </Box>
          ) : undefined
        }
      />
    )
  })

  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center" paddingX="20px">
      <Header title="João, como você quer pagar?" />
      <Box marginTop="10px">{renderPix}</Box>
      <WrapperList marginTop="34px">{renderInstallments}</WrapperList>
      <Footer />
    </Box>
  )
}

export default PixScreen
