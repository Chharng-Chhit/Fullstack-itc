import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex, Space, Input } from 'antd';
const { Search } = Input;

function NewNavbar() {

  return (
    <>
        <Flex gap="medium" justify='center'>
            <Button type="dashed" icon={<SearchOutlined />}>
                Search
            </Button>
            <Button type="primary">Primary</Button>
            <Space.Compact>
                <Space.Addon>https://</Space.Addon>
                <Search placeholder="input search text" allowClear />
            </Space.Compact>
        </Flex>

        <div className="rounded-lg bg-blue-500 p-4 text-white">
            Hello Tailwind
        </div>
    </>
  )
}

export default NewNavbar
