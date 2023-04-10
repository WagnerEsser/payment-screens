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

  :active {
    border: 2px solid #03d69d;
    background-color: #f4fbf9;
  }
`

Wrapper.defaultProps = {
  position: 'relative',
  width: '430px',
  height: '137px',
  borderRadius: '10px',
  padding: '20px'
}
