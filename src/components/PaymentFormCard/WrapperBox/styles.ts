import { Box } from '@mui/material'
import styled from 'styled-components'
import { type WrapperProps } from './types'

export const Wrapper = styled(Box)<WrapperProps>`
  border: 2px solid ${({ selected }) => (selected ? '#03D69D' : '#E5E5E5')};
  background-color: ${({ selected }) => (selected ? '#F4FBF9' : 'none')};
  cursor: pointer;

  :hover {
    border: 2px solid #00c791;
    background-color: #e5f5f1;
  }

  :first-child {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  :last-child {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  // to remove duplicated border
  :nth-child(-n + ${({ qtyItems }) => qtyItems - 1}) {
    ${({ selected }) => !selected && `border-bottom: 0;`}

    :hover {
      border: 2px solid #03d69d;

      & + * {
        border-top: 0;
      }
    }
  }

  ${({ selected }) =>
    selected &&
    `
      & + * {
        border-top: 0 !important;
      }
  `}
`

Wrapper.defaultProps = {
  position: 'relative',
  width: '430px',
  padding: '20px'
}
