import { useEffect, useState } from 'react'
import { Table, Button, Space, Modal, Form, Input, InputNumber, Select, Tag, Popconfirm, message } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { getStockMovements, createStockMovement, updateStockMovement, deleteStockMovement } from '../api/stockMovementApi.js'
import { getProducts } from '../api/productApi.js'

function StockMovementsPage() {
  const [movements, setMovements] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingMovement, setEditingMovement] = useState(null)
  const [form] = Form.useForm()

  // Load stock movements
  async function loadMovements(search = '') {
    setLoading(true)
    try {
      const res = await getStockMovements(search)
      setMovements(res.data || [])
    } catch (error) {
      console.error(error)
      message.error('Failed to load stock movements')
    }
    setLoading(false)
  }

  // Load products for dropdown
  async function loadProducts() {
    try {
      const res = await getProducts()
      setProducts(res.data || [])
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadMovements()
    loadProducts()
  }, [])

  // Open modal to add
  function handleAdd() {
    setEditingMovement(null)
    form.resetFields()
    form.setFieldsValue({ type: 'in', quantity: 1 })
    setIsModalOpen(true)
  }

  // Open modal to edit
  function handleEdit(record) {
    setEditingMovement(record)
    form.resetFields()
    form.setFieldsValue(record)
    setIsModalOpen(true)
  }

  // Save stock movement
  async function handleSave() {
    try {
      const values = await form.validateFields()
      if (editingMovement) {
        await updateStockMovement(editingMovement.id, values)
        message.success('Stock movement updated successfully')
      } else {
        await createStockMovement(values)
        message.success('Stock movement created successfully')
      }
      setIsModalOpen(false)
      loadMovements()
    } catch (error) {
      console.error(error)
      message.error('Failed to save stock movement')
    }
  }

  // Delete stock movement
  async function handleDelete(id) {
    try {
      await deleteStockMovement(id)
      message.success('Stock movement deleted successfully')
      loadMovements()
    } catch (error) {
      console.error(error)
      message.error('Failed to delete stock movement')
    }
  }

  // Table columns
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Product',
      key: 'product',
      render: (_, record) => record.product?.name || `Product #${record.product_id}`,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (qty) => (
        <Tag color={Number(qty) > 0 ? 'green' : 'red'}>
          {Number(qty) > 0 ? `+${qty}` : qty}
        </Tag>
      ),
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type) => <Tag color="blue">{type?.toUpperCase()}</Tag>,
    },
    {
      title: 'Reference',
      dataIndex: 'reference',
      key: 'reference',
      render: (text) => text || '—',
    },
    {
      title: 'Note',
      dataIndex: 'note',
      key: 'note',
      render: (text) => text || '—',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this movement?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<DeleteOutlined />} danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h2>Stock Movements Management</h2>
        <Space>
          <Input.Search
            placeholder="Search reference..."
            onSearch={(val) => loadMovements(val)}
            style={{ width: 220 }}
            allowClear
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            Add Movement
          </Button>
        </Space>
      </div>

      <Table
        rowKey="id"
        columns={columns}
        dataSource={movements}
        loading={loading}
      />

      <Modal
        title={editingMovement ? 'Edit Stock Movement' : 'Add Stock Movement'}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleSave}
        destroyOnClose
      >
        <Form form={form} layout="vertical">
          <Form.Item name="product_id" label="Product" rules={[{ required: true, message: 'Please select product' }]}>
            <Select
              placeholder="Select product"
              options={products.map((p) => ({ label: p.name, value: p.id }))}
            />
          </Form.Item>
          <Form.Item name="quantity" label="Quantity" rules={[{ required: true, message: 'Enter quantity' }]}>
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="type" label="Type" rules={[{ required: true, message: 'Select type' }]}>
            <Select
              options={[
                { label: 'In', value: 'in' },
                { label: 'Out', value: 'out' },
                { label: 'Adjustment', value: 'adjustment' },
                { label: 'Return', value: 'return' },
              ]}
            />
          </Form.Item>
          <Form.Item name="reference" label="Reference">
            <Input placeholder="Reference" />
          </Form.Item>
          <Form.Item name="note" label="Note">
            <Input.TextArea rows={2} placeholder="Note" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default StockMovementsPage

