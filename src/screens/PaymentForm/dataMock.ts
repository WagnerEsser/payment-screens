import { type InstallmentStep } from 'src/screens/PixAndCard/types'

export const INSTALLMENT_STEPS: InstallmentStep[] = [
  {
    description: '1ª entrada no Pix',
    value: 'R$ 15.300,00',
    done: true
  },
  {
    description: '2ª no cartão',
    value: 'R$ 15.300,00',
    current: true
  }
]
