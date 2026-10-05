import { useEffect, useState } from 'react'
import { Table, Button, Space, Modal, Form, Input, Popconfirm, message } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { getCategories, createCategory, updateCategory, deleteCategory } from '../api/categoryApi.js'

function CategoriesPage() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingCategory, setEditingCategory] = useState(null)
  const [form] = Form.useForm()

  // Load categories from API
  async function loadCategories(search = '') {
    setLoading(true)
    try {
      const res = await getCategories(search)
      setCategories(res.data || [])
    } catch (error) {
      console.error(error)
      message.error('Failed to load categories')
    }
    setLoading(false)
  }

  // Load on start
  useEffect(() => {
    loadCategories()
  }, [])

  // Open modal to add
  function handleAdd() {
    setEditingCategory(null)
    form.resetFields()
    setIsModalOpen(true)
  }

  // Open modal to edit
  function handleEdit(record) {
    setEditingCategory(record)
    form.resetFields()
    form.setFieldsValue(record)
    setIsModalOpen(true)
  }

  // Save category
  async function handleSave() {
    try {
      const values = await form.validateFields()
      if (editingCategory) {
        await updateCategory(editingCategory.id, values)
        message.success('Category updated successfully')
      } else {
        await createCategory(values)
        message.success('Category created successfully')
      }
      setIsModalOpen(false)
      loadCategories()
    } catch (error) {
      console.error(error)
      message.error('Failed to save category')
    }
  }

  // Delete category
  async function handleDelete(id) {
    try {
      await deleteCategory(id)
      message.success('Category deleted successfully')
      loadCategories()
    } catch (error) {
      console.error(error)
      message.error('Failed to delete category')
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
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
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
            title="Are you sure you want to delete this category?"
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
        <h2>Categories Management</h2>
        <Space>
          <Input.Search
            placeholder="Search categories..."
            onSearch={(val) => loadCategories(val)}
            style={{ width: 220 }}
            allowClear
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            Add Category
          </Button>
        </Space>
      </div>

      <Table
        rowKey="id"
        columns={columns}
        dataSource={categories}
        loading={loading}
      />

      <Modal
        title={editingCategory ? 'Edit Category' : 'Add Category'}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleSave}
        destroyOnClose
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter category name' }]}>
            <Input placeholder="Category Name" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea rows={3} placeholder="Description" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default CategoriesPage

