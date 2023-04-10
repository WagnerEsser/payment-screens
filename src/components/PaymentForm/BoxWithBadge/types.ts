export interface Props {
  badgeText: string
  children: JSX.Element[]
  changeSelected: React.Dispatch<React.SetStateAction<boolean>>
  selected?: boolean
}

export interface WrapperProps {
  selected?: boolean
}
