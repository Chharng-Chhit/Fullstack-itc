import { useEffect, useState } from 'react'
import { Table, Button, Space, Modal, Form, Input, Select, Tag, Popconfirm, message } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { getUsers, createUser, updateUser, deleteUser } from '../api/userApi.js'

function UsersPage() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingUser, setEditingUser] = useState(null)
  const [form] = Form.useForm()

  // Load users from API
  async function loadUsers(search = '') {
    setLoading(true)
    try {
      const res = await getUsers(search)
      setUsers(res.data || [])
    } catch (error) {
      console.error(error)
      message.error('Failed to load users')
    }
    setLoading(false)
  }

  // Load on start
  useEffect(() => {
    loadUsers()
  }, [])

  // Open modal to add user
  function handleAdd() {
    setEditingUser(null)
    form.resetFields()
    form.setFieldsValue({ status: 'active', role: 'cashier' })
    setIsModalOpen(true)
  }

  // Open modal to edit user
  function handleEdit(record) {
    setEditingUser(record)
    form.resetFields()
    form.setFieldsValue(record)
    setIsModalOpen(true)
  }

  // Save user (Add or Edit)
  async function handleSave() {
    try {
      const values = await form.validateFields()
      if (editingUser) {
        await updateUser(editingUser.id, values)
        message.success('User updated successfully')
      } else {
        await createUser(values)
        message.success('User created successfully')
      }
      setIsModalOpen(false)
      loadUsers()
    } catch (error) {
      console.error(error)
      message.error('Failed to save user')
    }
  }

  // Delete user
  async function handleDelete(id) {
    try {
      await deleteUser(id)
      message.success('User deleted successfully')
      loadUsers()
    } catch (error) {
      console.error(error)
      message.error('Failed to delete user')
    }
  }

  // Columns for the table
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
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (role) => <Tag color="blue">{role}</Tag>,
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
            title="Are you sure you want to delete this user?"
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
        <h2>Users Management</h2>
        <Space>
          <Input.Search
            placeholder="Search users..."
            onSearch={(val) => loadUsers(val)}
            style={{ width: 220 }}
            allowClear
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            Add User
          </Button>
        </Space>
      </div>

      <Table
        rowKey="id"
        columns={columns}
        dataSource={users}
        loading={loading}
      />

      <Modal
        title={editingUser ? 'Edit User' : 'Add User'}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleSave}
        destroyOnClose
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter name' }]}>
            <Input placeholder="Full Name" />
          </Form.Item>

          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Please enter email' }]}>
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: !editingUser, message: 'Please enter password' }]}
          >
            <Input.Password placeholder={editingUser ? 'Leave blank to keep current password' : 'Password'} />
          </Form.Item>

          <Form.Item name="role" label="Role" rules={[{ required: true, message: 'Please select role' }]}>
            <Select
              options={[
                { label: 'Admin', value: 'admin' },
                { label: 'Cashier', value: 'cashier' },
                { label: 'Manager', value: 'manager' },
              ]}
            />
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

export default UsersPage

