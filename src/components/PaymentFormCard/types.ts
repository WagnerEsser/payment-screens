import { type Props as RibbonProps } from 'src/components/PaymentFormCard/Ribbon/types'

export interface Props {
  values: {
    installment: string
    installmentValue: string
    total?: string
    cashbackPercent?: string
  }
  qtyItems?: number
  badgeText?: string
  ribbonContent?: RibbonProps['content']
  selected?: boolean
  changeSelected: React.Dispatch<React.SetStateAction<boolean>>
}
