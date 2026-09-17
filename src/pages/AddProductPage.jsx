import { Typography, Card, Tag } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import ProductForm from '../components/ProductForm.jsx'

const { Title, Paragraph } = Typography

function AddProductPage({ onAddProduct }) {
  return (
    <div className="add-product-page">
      <div style={{ marginBottom: 20 }}>
        <Tag color="purple" icon={<FormOutlined />} style={{ marginBottom: 8 }}>
          useState & Events
        </Tag>
        <Title level={2} style={{ margin: '4px 0 8px 0' }}>
          Add a Product
        </Title>
        <Paragraph type="secondary" style={{ margin: 0, maxWidth: 600 }}>
          Fill in the details below. Submitting the form updates the shared product state across the application.
        </Paragraph>
      </div>

      <Card variant="borderless" style={{ background: '#fafafa', borderRadius: 12, border: '1px solid #f0f0f0' }}>
        <ProductForm onAddProduct={onAddProduct} />
      </Card>
    </div>
  )
}

export default AddProductPage
