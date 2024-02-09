import React from "react"
import { Card, Form, Input, Button, message } from "antd"
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons"
import "./index.less"
import { LoginType } from "@/api/types"
import { getTokenData } from "@/api/index"
import { userTokenStore } from "@/store/index"
import { useNavigate } from "react-router-dom"
const Login: React.FC = () => {
  const navigate = useNavigate()
  const onFinish = async (values: LoginType) => {
    console.log(values)
    
    const res = await getTokenData(values)
    userTokenStore.token = res.data.token
    navigate("/")
    message.success("登录成功")
  }

  return (
    <div className="login">
      <div className="top-logo">
        <img className="login-logo" src="https://static.planckx.io/image/logo/plx-logo-light.svg" alt="logo" />
      </div>
      <Card className="login-container">
        <div className="login-title">登录</div>
        <Form onFinish={onFinish} validateTrigger="onBlur" initialValues={{ mobile: "13800000002", code: "246810" }}>
          <Form.Item
            label="账号"
            name="mobile"
            rules={[
              { required: true, message: "Please input your mobile!" },
              { pattern: /^1[3-9]\d{9}$/, message: "请输入正确的账号" },
            ]}
          >
            <Input size="large" placeholder="请输入账号" />
          </Form.Item>
          <Form.Item label="密码" name="code" rules={[{ required: true, message: "Please input your code!" }]}>
            <Input.Password
              size="large"
              placeholder="请输入密码"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>
          <Form.Item>
            <Button className="login-btn" type="primary" size="large" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
