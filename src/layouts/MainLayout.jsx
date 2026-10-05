import { useState } from 'react'
import { Outlet, useLocation, Link } from 'react-router'
import { Layout, Breadcrumb, Typography } from 'antd'
import Navigation from '../components/Navigation.jsx'

const { Header, Content, Sider, Footer } = Layout
const { Text } = Typography

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()

  const breadcrumbMap = {
    '/': ['Dashboard'],
    '/products': ['Products'],
    '/categories': ['Categories'],
    '/users': ['Users'],
    '/sales': ['Sales'],
    '/sale-items': ['Sale items'],
    '/payments': ['Payments'],
    '/new-pages': ['New Pages'],
    '/stock-movements': ['Stock movements'],
  }

  const currentBreadcrumbs = breadcrumbMap[location.pathname] || ['Dashboard']

  const breadcrumbItems = [
    {
      title: <Link to="/">POS Manager</Link>,
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
            Point of sale management
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
            <Outlet />
          </div>
        </Content>

        <Footer style={{ textAlign: 'center', color: '#8c8c8c', padding: '16px 50px' }}>
          POS Manager © {new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout
