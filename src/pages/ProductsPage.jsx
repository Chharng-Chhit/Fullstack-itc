import { useEffect, useState } from 'react'
import { Table, Button, Space, Modal, Form, Input, InputNumber, Select, Tag, Popconfirm, message } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { getProducts, createProduct, updateProduct, deleteProduct } from '../api/productApi.js'
import { getCategories } from '../api/categoryApi.js'

function ProductsPage() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [form] = Form.useForm()

  // Load products
  async function loadProducts(search = '') {
    setLoading(true)
    try {
      const res = await getProducts(search)
      setProducts(res.data || [])
    } catch (error) {
      console.error(error)
      message.error('Failed to load products')
    }
    setLoading(false)
  }

  // Load categories for dropdown
  async function loadCategories() {
    try {
      const res = await getCategories()
      setCategories(res.data || [])
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadProducts()
    loadCategories()
  }, [])

  // Open modal to add
  function handleAdd() {
    setEditingProduct(null)
    form.resetFields()
    form.setFieldsValue({ status: 'active', stock_quantity: 0 })
    setIsModalOpen(true)
  }

  // Open modal to edit
  function handleEdit(record) {
    setEditingProduct(record)
    form.resetFields()
    form.setFieldsValue(record)
    setIsModalOpen(true)
  }

  // Save product
  async function handleSave() {
    try {
      const values = await form.validateFields()
      if (editingProduct) {
        await updateProduct(editingProduct.id, values)
        message.success('Product updated successfully')
      } else {
        await createProduct(values)
        message.success('Product created successfully')
      }
      setIsModalOpen(false)
      loadProducts()
    } catch (error) {
      console.error(error)
      message.error('Failed to save product')
    }
  }

  // Delete product
  async function handleDelete(id) {
    try {
      await deleteProduct(id)
      message.success('Product deleted successfully')
      loadProducts()
    } catch (error) {
      console.error(error)
      message.error('Failed to delete product')
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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'SKU',
      dataIndex: 'sku',
      key: 'sku',
    },
    {
      title: 'Category',
      key: 'category',
      render: (_, record) => record.category?.name || record.category_id,
    },
    {
      title: 'Cost Price',
      dataIndex: 'cost_price',
      key: 'cost_price',
      render: (price) => `$${price}`,
    },
    {
      title: 'Selling Price',
      dataIndex: 'selling_price',
      key: 'selling_price',
      render: (price) => `$${price}`,
    },
    {
      title: 'Stock',
      dataIndex: 'stock_quantity',
      key: 'stock_quantity',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'active' ? 'green' : 'default'}>{status}</Tag>
      ),
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
            title="Are you sure you want to delete this product?"
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
        <h2>Products Management</h2>
        <Space>
          <Input.Search
            placeholder="Search products..."
            onSearch={(val) => loadProducts(val)}
            style={{ width: 220 }}
            allowClear
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            Add Product
          </Button>
        </Space>
      </div>

      <Table
        rowKey="id"
        columns={columns}
        dataSource={products}
        loading={loading}
      />

      <Modal
        title={editingProduct ? 'Edit Product' : 'Add Product'}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleSave}
        destroyOnClose
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Product Name" rules={[{ required: true, message: 'Please enter product name' }]}>
            <Input placeholder="Product name" />
          </Form.Item>
          <Form.Item name="category_id" label="Category" rules={[{ required: true, message: 'Please select category' }]}>
            <Select
              placeholder="Select category"
              options={categories.map((c) => ({ label: c.name, value: c.id }))}
            />
          </Form.Item>
          <Form.Item name="sku" label="SKU" rules={[{ required: true, message: 'Please enter SKU' }]}>
            <Input maxLength={5} placeholder="e.g. PR01" />
          </Form.Item>
          <Form.Item name="barcode" label="Barcode">
            <Input placeholder="Barcode" />
          </Form.Item>
          <Form.Item name="cost_price" label="Cost Price" rules={[{ required: true, message: 'Enter cost price' }]}>
            <InputNumber min={0} step={0.01} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="selling_price" label="Selling Price" rules={[{ required: true, message: 'Enter selling price' }]}>
            <InputNumber min={0} step={0.01} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="stock_quantity" label="Stock Quantity">
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="status" label="Status">
            <Select
              options={[
                { label: 'Active', value: 'active' },
                { label: 'Inactive', value: 'inactive' },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default ProductsPage

