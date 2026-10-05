import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import LoginForm from '../components/LoginForm';
const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
const LoginPage = () => (
  <>
    <LoginForm name="Submit" isShowRememberMe={false} />

    <LoginForm name="Click" isShowRememberMe={true}/>
  </>
);
export default LoginPage;