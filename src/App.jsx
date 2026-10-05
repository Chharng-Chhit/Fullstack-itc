import { Navigate, Route, Routes } from 'react-router'
import DashboardPage from './pages/DashboardPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import CategoriesPage from './pages/CategoriesPage.jsx'
import UsersPage from './pages/UsersPage.jsx'
import SalesPage from './pages/SalesPage.jsx'
import SaleItemsPage from './pages/SaleItemsPage.jsx'
import PaymentsPage from './pages/PaymentsPage.jsx'
import StockMovementsPage from './pages/StockMovementsPage.jsx'
import NewPage from './pages/NewPage.jsx'
import PageDetail from './pages/PageDetail.jsx'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="sales" element={<SalesPage />} />
        <Route path="sale-items" element={<SaleItemsPage />} />
        <Route path="payments" element={<PaymentsPage />} />
        <Route path="stock-movements" element={<StockMovementsPage />} />
        <Route path="new-pages" element={<NewPage />} />
        <Route path="/new-pages/:pageId" element={<PageDetail />} />
        <Route path="login" element={<Navigate to="/" replace />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App

