import { ThemeProvider, createTheme } from '@mui/material'
import Default from './components/Default'
import PixScreen from './screens/PixScreen'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PixAndCard from './screens/PixAndCard'
import PaymentForm from './screens/PaymentForm'

export const ROUTES = [
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
        <PixAndCard />
      </Default>
    )
  },
  {
    path: 'payment-form',
    element: (
      <Default>
        <PaymentForm />
      </Default>
    )
  }
]

const theme = createTheme({
  typography: {
    fontFamily: 'Nunito'
  }
})

const router = createBrowserRouter(ROUTES)

const App = () => (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
)

export default App
