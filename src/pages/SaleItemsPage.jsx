import { useEffect, useState } from 'react'
import { Table, Button, Space, Modal, Form, Input, InputNumber, Select, Popconfirm, message } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { getSaleItems, createSaleItem, updateSaleItem, deleteSaleItem } from '../api/saleItemApi.js'
import { getSales } from '../api/saleApi.js'
import { getProducts } from '../api/productApi.js'

function SaleItemsPage() {
  const [saleItems, setSaleItems] = useState([])
  const [sales, setSales] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingSaleItem, setEditingSaleItem] = useState(null)
  const [form] = Form.useForm()

  async function loadSaleItems(search = '') {
    setLoading(true)
    try {
      const res = await getSaleItems(search)
      setSaleItems(res.data || [])
    } catch (error) {
      console.error(error)
      message.error('Failed to load sale items')
    } finally {
      setLoading(false)
    }
  }

  async function loadOptions() {
    try {
      const [salesRes, productsRes] = await Promise.all([getSales(), getProducts()])
      setSales(salesRes.data || [])
      setProducts(productsRes.data || [])
    } catch (error) {
      console.error(error)
      message.error('Failed to load sales or products')
    }
  }

  useEffect(() => {
    loadSaleItems()
    loadOptions()
  }, [])

  function handleAdd() {
    setEditingSaleItem(null)
    form.resetFields()
    form.setFieldsValue({ quantity: 1, unit_price: 0, subtotal: 0 })
    setIsModalOpen(true)
  }

  function handleEdit(record) {
    setEditingSaleItem(record)
    form.setFieldsValue(record)
    setIsModalOpen(true)
  }

  async function handleSave() {
    try {
      const values = await form.validateFields()
      if (editingSaleItem) {
        await updateSaleItem(editingSaleItem.id, values)
        message.success('Sale item updated successfully')
      } else {
        await createSaleItem(values)
        message.success('Sale item created successfully')
      }
      setIsModalOpen(false)
      loadSaleItems()
    } catch (error) {
      console.error(error)
      message.error('Failed to save sale item')
    }
  }

  async function handleDelete(id) {
    try {
      await deleteSaleItem(id)
      message.success('Sale item deleted successfully')
      loadSaleItems()
    } catch (error) {
      console.error(error)
      message.error('Failed to delete sale item')
    }
  }

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Sale', key: 'sale', render: (_, record) => record.sale?.invoice_no || `Sale #${record.sale_id}` },
    { title: 'Product', key: 'product', render: (_, record) => record.product?.name || `Product #${record.product_id}` },
    { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
    { title: 'Unit Price', dataIndex: 'unit_price', key: 'unit_price', render: (value) => `$${value}` },
    { title: 'Subtotal', dataIndex: 'subtotal', key: 'subtotal', render: (value) => `$${value}` },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)}>Edit</Button>
          <Popconfirm title="Are you sure you want to delete this sale item?" onConfirm={() => handleDelete(record.id)} okText="Yes" cancelText="No">
            <Button icon={<DeleteOutlined />} danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h2>Sale Items Management</h2>
        <Space>
          <Input.Search
            placeholder="Search sale items..."
            onSearch={loadSaleItems}
            style={{ width: 220 }}
            allowClear
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>Add Sale Item</Button>
        </Space>
      </div>

      <Table rowKey="id" columns={columns} dataSource={saleItems} loading={loading} />

      <Modal
        title={editingSaleItem ? 'Edit Sale Item' : 'Add Sale Item'}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleSave}
        destroyOnClose
      >
        <Form form={form} layout="vertical">
          <Form.Item name="sale_id" label="Sale" rules={[{ required: true, message: 'Please select a sale' }]}>
            <Select placeholder="Select sale" options={sales.map((sale) => ({ label: `${sale.invoice_no || `Sale #${sale.id}`}`, value: sale.id }))} />
          </Form.Item>
          <Form.Item name="product_id" label="Product" rules={[{ required: true, message: 'Please select a product' }]}>
            <Select placeholder="Select product" options={products.map((product) => ({ label: product.name, value: product.id }))} />
          </Form.Item>
          <Form.Item name="quantity" label="Quantity" rules={[{ required: true, message: 'Enter quantity' }]}>
            <InputNumber min={1} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="unit_price" label="Unit Price" rules={[{ required: true, message: 'Enter unit price' }]}>
            <InputNumber min={0} step={0.01} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="subtotal" label="Subtotal" rules={[{ required: true, message: 'Enter subtotal' }]}>
            <InputNumber min={0} step={0.01} style={{ width: '100%' }} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default SaleItemsPage
