import { ThemeProvider, createTheme } from '@mui/material'
import Default from './components/Default'
import PixScreen from './screens/PixScreen'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const theme = createTheme({
  typography: {
    fontFamily: 'Nunito'
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Default>
        <PixScreen />
      </Default>
    )
  },
  {
    path: '/payment-method',
    element: (
      <Default>
        <PixScreen />
      </Default>
    )
  },
  {
    path: 'pix-card',
    element: (
      <Default>
        <PixScreen />
      </Default>
    )
  },
  {
    path: 'payment-form',
    element: (
      <Default>
        <PixScreen />
      </Default>
    )
  }
])

const App = () => (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
)

export default App
