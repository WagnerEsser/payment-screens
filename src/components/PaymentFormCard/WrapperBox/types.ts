import { type ReactElement } from 'react'

export interface Props {
  children: ReactElement
  qtyItems?: number
  badgeText?: string
  selected?: boolean
  changeSelected: React.Dispatch<React.SetStateAction<boolean>>
}

export interface WrapperProps {
  selected?: boolean
  qtyItems: number
}
