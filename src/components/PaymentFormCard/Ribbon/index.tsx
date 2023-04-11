import { type Props } from './types'
import { RibbonWrapper } from './styles'

const Ribbon = ({ content }: Props) => (
  <RibbonWrapper width="100%" color="white" padding="7px" sx={{ bgcolor: '#133A6F' }}>
    {content}
  </RibbonWrapper>
)

export default Ribbon
