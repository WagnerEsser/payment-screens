import { Box } from '@mui/material';
import PixScreen from './pages/PixScreen';
import './styles/global.css';

const App = () => (
  <Box display="flex" flexDirection="column" width="100%" height="100%" position="relative">
    <PixScreen />
  </Box>
)

export default App;
