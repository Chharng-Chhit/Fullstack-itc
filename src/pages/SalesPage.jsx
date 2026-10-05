import { useEffect, useState } from 'react'
import { Table, Button, Space, Modal, Form, Input, InputNumber, Select, Tag, Popconfirm, message } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { getSales, createSale, updateSale, deleteSale } from '../api/saleApi.js'
import { getUsers } from '../api/userApi.js'

function SalesPage() {
  const [sales, setSales] = useState([])
  const [cashiers, setCashiers] = useState([])
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingSale, setEditingSale] = useState(null)
  const [form] = Form.useForm()

  // Load sales
  async function loadSales(search = '') {
    setLoading(true)
    try {
      const res = await getSales(search)
      setSales(res.data || [])
    } catch (error) {
      console.error(error)
      message.error('Failed to load sales')
    }
    setLoading(false)
  }

  // Load cashiers for dropdown
  async function loadCashiers() {
    try {
      const res = await getUsers()
      setCashiers(res.data || [])
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadSales()
    loadCashiers()
  }, [])

  // Open modal to add
  function handleAdd() {
    setEditingSale(null)
    form.resetFields()
    form.setFieldsValue({
      invoice_no: `INV-${Date.now().toString().slice(-6)}`,
      total: 0,
      discounts: 0,
      status: 'pending',
    })
    setIsModalOpen(true)
  }

  // Open modal to edit
  function handleEdit(record) {
    setEditingSale(record)
    form.resetFields()
    form.setFieldsValue(record)
    setIsModalOpen(true)
  }

  // Save sale
  async function handleSave() {
    try {
      const values = await form.validateFields()
      if (editingSale) {
        await updateSale(editingSale.id, values)
        message.success('Sale updated successfully')
      } else {
        await createSale(values)
        message.success('Sale created successfully')
      }
      setIsModalOpen(false)
      loadSales()
    } catch (error) {
      console.error(error)
      message.error('Failed to save sale')
    }
  }

  // Delete sale
  async function handleDelete(id) {
    try {
      await deleteSale(id)
      message.success('Sale deleted successfully')
      loadSales()
    } catch (error) {
      console.error(error)
      message.error('Failed to delete sale')
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
      title: 'Invoice No',
      dataIndex: 'invoice_no',
      key: 'invoice_no',
    },
    {
      title: 'Cashier',
      key: 'cashier',
      render: (_, record) => record.user?.name || `User #${record.cashier_id}`,
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (val) => `$${val}`,
    },
    {
      title: 'Discounts',
      dataIndex: 'discounts',
      key: 'discounts',
      render: (val) => `$${val}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'completed' ? 'green' : 'orange'}>{status}</Tag>
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
            title="Are you sure you want to delete this sale?"
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
        <h2>Sales Management</h2>
        <Space>
          <Input.Search
            placeholder="Search invoice..."
            onSearch={(val) => loadSales(val)}
            style={{ width: 220 }}
            allowClear
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            Add Sale
          </Button>
        </Space>
      </div>

      <Table
        rowKey="id"
        columns={columns}
        dataSource={sales}
        loading={loading}
      />

      <Modal
        title={editingSale ? 'Edit Sale' : 'Add Sale'}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleSave}
        destroyOnClose
      >
        <Form form={form} layout="vertical">
          <Form.Item name="invoice_no" label="Invoice No" rules={[{ required: true, message: 'Please enter invoice number' }]}>
            <Input placeholder="Invoice number" />
          </Form.Item>
          <Form.Item name="cashier_id" label="Cashier" rules={[{ required: true, message: 'Please select cashier' }]}>
            <Select
              placeholder="Select cashier"
              options={cashiers.map((c) => ({ label: c.name, value: c.id }))}
            />
          </Form.Item>
          <Form.Item name="total" label="Total Amount">
            <InputNumber min={0} step={0.01} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="discounts" label="Discounts">
            <InputNumber min={0} step={0.01} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="status" label="Status">
            <Select
              options={[
                { label: 'Pending', value: 'pending' },
                { label: 'Completed', value: 'completed' },
                { label: 'Cancelled', value: 'cancelled' },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default SalesPage

