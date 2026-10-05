import { useLocation, useNavigate } from 'react-router'
import { Menu } from 'antd'
import ITCLogo from '/src/assets/image/itc.png'
import {
  AppstoreOutlined,
  CreditCardOutlined,
  HomeOutlined,
  InboxOutlined,
  ShoppingCartOutlined,
  TagsOutlined,
  UserOutlined,
} from '@ant-design/icons'

function Navigation({ isCollapsed }) {
  const location = useLocation()
  const navigate = useNavigate()

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: 'Dashboard',
    },
    {
      key: '/products',
      icon: <AppstoreOutlined />,
      label: 'Products',
    },
    {
      key: '/categories',
      icon: <TagsOutlined />,
      label: 'Categories',
    },
    {
      key: '/sales',
      icon: <ShoppingCartOutlined />,
      label: 'Sales',
    },
    {
      key: '/sale-items',
      icon: <AppstoreOutlined />,
      label: 'Sale items',
    },
    {
      key: '/payments',
      icon: <CreditCardOutlined />,
      label: 'Payments',
    },
    {
      key: '/stock-movements',
      icon: <InboxOutlined />,
      label: 'Stock movements',
    },
    {
      key: '/users',
      icon: <UserOutlined />,
      label: 'Users',
    },
    {
      key: '/new-pages',
      icon: <UserOutlined />,
      label: "New Page"
    }
  ]

  // Find active key based on current pathname
  const activeKey = location.pathname

  const handleMenuClick = ({ key }) => {
    if (key.startsWith('/')) {
      navigate(key)
    }
  }

  return (
    <div className="nav-container">
      <div className="brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <span className="brand-mark">
          <img src={ITCLogo} alt="logo" />
        </span>
        {!isCollapsed && <span className="nav-label">POS Manager</span>}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[activeKey]}
        defaultOpenKeys={['team-group']}
        items={menuItems}
        onClick={handleMenuClick}
        style={{ borderRight: 0, background: 'transparent' }}
      />
    </div>
  )
}

export default Navigation
