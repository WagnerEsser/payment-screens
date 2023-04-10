export interface Props {
  badgeText: string
  children: JSX.Element | JSX.Element[]
  changeSelected: React.Dispatch<React.SetStateAction<boolean>>
  selected?: boolean
}

export interface WrapperProps {
  selected?: boolean
}
