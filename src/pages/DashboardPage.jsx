import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router'
import { Alert, Button, Card, Col, Row, Skeleton, Space, Statistic, Typography } from 'antd'
import {
  AppstoreOutlined,
  CreditCardOutlined,
  DollarOutlined,
  ReloadOutlined,
  ShoppingCartOutlined,
  TagsOutlined,
  TeamOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { getCategories } from '../api/categoryApi.js'
import { getPayments } from '../api/paymentApi.js'
import { getProducts } from '../api/productApi.js'
import { getSaleItems } from '../api/saleItemApi.js'
import { getSales } from '../api/saleApi.js'
import { getStockMovements } from '../api/stockMovementApi.js'
import { getUserDatas } from '../api/userApi.js'

const { Paragraph, Title } = Typography

const summaryCards = [
  { key: 'products', title: 'Products', path: '/products', getData: getProducts, icon: <AppstoreOutlined />, color: '#1677ff' },
  { key: 'categories', title: 'Categories', path: '/categories', getData: getCategories, icon: <TagsOutlined />, color: '#13a8a8' },
  { key: 'users', title: 'Users', path: '/users', getData: getUserDatas, icon: <TeamOutlined />, color: '#722ed1' },
  { key: 'sales', title: 'Sales', path: '/sales', getData: getSales, icon: <ShoppingCartOutlined />, color: '#389e0d' },
  { key: 'payments', title: 'Payments', path: '/payments', getData: getPayments, icon: <CreditCardOutlined />, color: '#eb2f96' },
  { key: 'saleItems', title: 'Sale items', path: '/sale-items', getData: getSaleItems, icon: <UnorderedListOutlined />, color: '#d48806' },
  { key: 'stockMovements', title: 'Stock movements', path: '/stock-movements', getData: getStockMovements, icon: <DollarOutlined />, color: '#531dab' },
]

function DashboardPage() {
  const [counts, setCounts] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadSummary = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const entries = await Promise.all(summaryCards.map(async ({ key, getData }) => {
        const result = await getData({ per_page: 1 })
        return [key, result.total ?? result.data?.length ?? 0]
      }))
      setCounts(Object.fromEntries(entries))
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadSummary()
  }, [loadSummary])

  return (
    <Space orientation="vertical" size={24} style={{ display: 'flex' }}>
      <div className="page-heading">
        <div>
          <Title level={2}>POS overview</Title>
          <Paragraph type="secondary">Live totals from your point of sale database.</Paragraph>
        </div>
        <Button icon={<ReloadOutlined />} onClick={loadSummary} loading={loading}>Refresh</Button>
      </div>

      {error && <Alert type="error" showIcon title="Could not load the POS API" description={error} />}

      <Row gutter={[16, 16]}>
        {summaryCards.map(({ key, title, path, icon, color }) => (
          <Col xs={24} sm={12} xl={8} key={key}>
            <Link to={path} className="summary-link">
              <Card hoverable>
                {loading && counts[key] === undefined ? (
                  <Skeleton active title={false} paragraph={{ rows: 1 }} />
                ) : (
                  <Statistic title={title} value={counts[key] ?? 0} prefix={icon} styles={{ content: { color } }} />
                )}
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Space>
  )
}

export default DashboardPage
