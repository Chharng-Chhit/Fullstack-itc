import { useEffect, useState } from 'react'
import { Route, Routes, useLocation, Link } from 'react-router'
import { Layout, Breadcrumb, Typography } from 'antd'
import { starterProducts } from './data/products.js'
import Navigation from './components/Navigation.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import AddProductPage from './pages/AddProductPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import TeamOnePage from './pages/TeamOnePage.jsx'
import TeamTwoPage from './pages/TeamTwoPage.jsx'
import TeamLayout from './pages/TeamLayout.jsx'
import UserPage from './pages/UserPage.jsx'

const { Header, Content, Sider, Footer } = Layout
const { Text } = Typography

function App() {
  // State is data that can change while the app is open.
  const [products, setProducts] = useState(starterProducts)
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()

  const breadcrumbMap = {
    '/': ['Overview'],
    '/products': ['Products'],
    '/users': ['Users'],
    '/add-product': ['Add Product'],
    '/team': ['Team'],
    '/team/team-1': ['Team', 'Team 1'],
    '/team/team-2': ['Team', 'Team 2'],
  }

  const currentBreadcrumbs = breadcrumbMap[location.pathname] || ['Page Not Found']

  // useEffect runs after React updates the page.
  useEffect(() => {
    document.title = `${products.length} products | Stock Starter`
  }, [products.length])

  function addProduct(newProduct) {
    setProducts((prevProducts) => [...prevProducts, newProduct])
  }

  const breadcrumbItems = [
    {
      title: <Link to="/">Inventory</Link>,
    },
    ...currentBreadcrumbs.map((crumb, index) => ({
      title: index === currentBreadcrumbs.length - 1 ? crumb : <Text>{crumb}</Text>,
    })),
  ]

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={240}
        collapsedWidth={80}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'sticky',
          top: 0,
          left: 0,
          background: '#001529',
        }}
      >
        <Navigation isCollapsed={collapsed} />
      </Sider>

      <Layout style={{ background: '#f5f7fa' }}>
        <Header
          style={{
            padding: '0 24px',
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #e8e8e8',
            height: 56,
            lineHeight: '56px',
          }}
        >
          <div className="window-controls" aria-hidden="true" style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span className="window-dot red" />
            <span className="window-dot yellow" />
            <span className="window-dot green" />
          </div>
          <Text type="secondary" style={{ fontSize: 13, fontWeight: 500 }}>
            React Inventory Practice • Ant Design UI
          </Text>
        </Header>

        <Content style={{ margin: '20px 24px 0', minHeight: 280 }}>
          <Breadcrumb
            items={breadcrumbItems}
            style={{ marginBottom: 16 }}
          />
          <div
            className="content-surface"
            style={{
              padding: 28,
              background: '#ffffff',
              borderRadius: 10,
              minHeight: 'calc(100vh - 180px)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage products={products} />} />
              <Route path="/products" element={<ProductsPage products={products} />} />
              <Route path="/add-product" element={<AddProductPage onAddProduct={addProduct} />} />
              <Route path="/users" element={<UserPage />} />
              <Route path="/team" element={<TeamLayout />}>
                <Route index element={<p>Select Team 1 or Team 2 from the sidebar.</p>} />
                <Route path="team-1" element={<TeamOnePage />} />
                <Route path="team-2" element={<TeamTwoPage />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </Content>

        <Footer style={{ textAlign: 'center', color: '#8c8c8c', padding: '16px 50px' }}>
          Stock Starter © {new Date().getFullYear()} — Built with React & Ant Design
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App
