import { useEffect, useState } from 'react'
import { Table, Button, Space, Modal, Form, Input, InputNumber, Select, Tag, Popconfirm, message } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { getPayments, createPayment, updatePayment, deletePayment } from '../api/paymentApi.js'
import { getSales } from '../api/saleApi.js'

function PaymentsPage() {
  const [payments, setPayments] = useState([])
  const [sales, setSales] = useState([])
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingPayment, setEditingPayment] = useState(null)
  const [form] = Form.useForm()

  // Load payments
  async function loadPayments(search = '') {
    setLoading(true)
    try {
      const res = await getPayments(search)
      setPayments(res.data || [])
    } catch (error) {
      console.error(error)
      message.error('Failed to load payments')
    }
    setLoading(false)
  }

  // Load sales for dropdown
  async function loadSales() {
    try {
      const res = await getSales()
      setSales(res.data || [])
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadPayments()
    loadSales()
  }, [])

  // Open modal to add
  function handleAdd() {
    setEditingPayment(null)
    form.resetFields()
    form.setFieldsValue({ payment_method: 'cash', amount: 0 })
    setIsModalOpen(true)
  }

  // Open modal to edit
  function handleEdit(record) {
    setEditingPayment(record)
    form.resetFields()
    form.setFieldsValue(record)
    setIsModalOpen(true)
  }

  // Save payment
  async function handleSave() {
    try {
      const values = await form.validateFields()
      if (editingPayment) {
        await updatePayment(editingPayment.id, values)
        message.success('Payment updated successfully')
      } else {
        await createPayment(values)
        message.success('Payment recorded successfully')
      }
      setIsModalOpen(false)
      loadPayments()
    } catch (error) {
      console.error(error)
      message.error('Failed to save payment')
    }
  }

  // Delete payment
  async function handleDelete(id) {
    try {
      await deletePayment(id)
      message.success('Payment deleted successfully')
      loadPayments()
    } catch (error) {
      console.error(error)
      message.error('Failed to delete payment')
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
      title: 'Sale Invoice',
      key: 'sale',
      render: (_, record) => record.sale?.invoice_no || `Sale #${record.sale_id}`,
    },
    {
      title: 'Method',
      dataIndex: 'payment_method',
      key: 'payment_method',
      render: (method) => <Tag color="blue">{method?.toUpperCase()}</Tag>,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (val) => `$${val}`,
    },
    {
      title: 'Reference No',
      dataIndex: 'reference_no',
      key: 'reference_no',
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
            title="Are you sure you want to delete this payment?"
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
        <h2>Payments Management</h2>
        <Space>
          <Input.Search
            placeholder="Search reference..."
            onSearch={(val) => loadPayments(val)}
            style={{ width: 220 }}
            allowClear
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            Record Payment
          </Button>
        </Space>
      </div>

      <Table
        rowKey="id"
        columns={columns}
        dataSource={payments}
        loading={loading}
      />

      <Modal
        title={editingPayment ? 'Edit Payment' : 'Record Payment'}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleSave}
        destroyOnClose
      >
        <Form form={form} layout="vertical">
          <Form.Item name="sale_id" label="Sale" rules={[{ required: true, message: 'Please select sale' }]}>
            <Select
              placeholder="Select sale"
              options={sales.map((s) => ({ label: `${s.invoice_no} (#${s.id})`, value: s.id }))}
            />
          </Form.Item>
          <Form.Item name="payment_method" label="Payment Method" rules={[{ required: true, message: 'Select method' }]}>
            <Select
              options={[
                { label: 'Cash', value: 'cash' },
                { label: 'Card', value: 'card' },
                { label: 'ABA Pay', value: 'aba' },
                { label: 'Bank Transfer', value: 'bank_transfer' },
              ]}
            />
          </Form.Item>
          <Form.Item name="amount" label="Amount" rules={[{ required: true, message: 'Enter amount' }]}>
            <InputNumber min={0} step={0.01} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="reference_no" label="Reference No">
            <Input placeholder="Reference Number" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default PaymentsPage

