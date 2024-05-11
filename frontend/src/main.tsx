import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StoreProvider } from './Store'
import CartPage from './pages/CartPage'
import SigninPage from './pages/SigninPage'
import ShippingAddressPage from './pages/ShippingAddressPage'
import PaymentMethodPage from './pages/PaymentMethodPage'
import ProtectedRoute from './components/ProtectedRoute'
import PlaceOrderPage from './pages/PlaceOrderPage'
import OrderPage from './pages/OrderPage'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import SignUpPage from './pages/SignUpPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path="product/:slug" element={<ProductPage />} />
      <Route path="kosik" element={<CartPage />} />
      <Route path="prihlaseni" element={<SigninPage />} />
      <Route path="registrace" element={<SignUpPage />} />
      <Route path="" element={<ProtectedRoute />}>
        <Route path="doprava" element={<ShippingAddressPage />} />
        <Route path="platba" element={<PaymentMethodPage />} />
        <Route path="objednat" element={<PlaceOrderPage />} />
        <Route path="/objednavka/:id" element={<OrderPage />} />
      </Route>
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* ... etc. */}
    </Route>
  )
)
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <PayPalScriptProvider options={{ 'client-id': 'sb' }} deferLoading={true}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </HelmetProvider>
      </PayPalScriptProvider>
    </StoreProvider>
  </React.StrictMode>
)
