import React, { useEffect, useState } from 'react';
import { Button, Flex, Space, Table, Tag, Input } from 'antd';
import { useNavigate } from 'react-router';
import { getUserDatas } from '../api/userApi';
const { Column, ColumnGroup } = Table;
const { Search } = Input;
// const [data, setData] = useState({});
const onSearch = (value, _e, info) => {
  console.log(info?.source, value)
  const data = getUserDatas(value);
  console.log(data);

};

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['kawaii'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

async function getUser(){
  const data = await getUserDatas();
  // setData(data?.data);
  return data;
  console.log(data);
}


export default function NewPage() {
  const navigate = useNavigate(); 
  const handleSelect = (id) => {
    // Navigate dynamically using template literals
    navigate(`/new-pages/${id}`);
  };
  


  return   (
    <>
      <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
      <Button onClick={getUser()}>Get User Data</Button>

      <Table dataSource={data}>
      <ColumnGroup title="Name">
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
      </ColumnGroup>
      <Column title="Age" dataIndex="age" key="age" />
      <Column title="Address" dataIndex="address" key="address" />
      <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={tags => (
          <Flex gap="small" align="center" wrap>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'kawaii') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </Flex>
        )}
      />
      <Column
        title="Action"
        key="action"
        render={(_, record) => (
          <Space size="medium">
            <a onClick={() => handleSelect(record.key)}>view</a>
            <a>Delete</a>
          </Space>
        )}
      />
    </Table>
    </>
  );
}
