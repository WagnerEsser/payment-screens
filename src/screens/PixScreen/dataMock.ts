import { type Installment } from './types'

export const INSTALLMENTS: Installment[] = [
  { value: 'R$ 30.500,00', total: 'R$ 30.500,00', cashback: { percent: '3%', value: 'R$ 300,00' } },
  { value: 'R$ 15.300,00', total: 'R$ 30.600,00' },
  { value: 'R$ 10.196,66', total: 'R$ 30.620,00' },
  { value: 'R$ 7.725,00', total: 'R$ 30.900,00', better: '-3%' },
  { value: 'R$ 6.300,00', total: 'R$ 31.500,00' },
  { value: 'R$ 5.283,33', total: 'R$ 31.699,98' },
  { value: 'R$ 4.542,85', total: 'R$ 31.800,00' }
]
