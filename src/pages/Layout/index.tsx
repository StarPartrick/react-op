import { Layout, Menu, Popconfirm } from "antd"
import { HomeOutlined, DiffOutlined, EditOutlined, LogoutOutlined } from "@ant-design/icons"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import "./index.less"

const { Header, Sider } = Layout

const GeekLayout = () => {
  const navigate = useNavigate()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  const onMenuClick = route => {
    const path = route.key
    navigate(path)
  }
  // 处理高亮问题
  const locations = useLocation()
  const currentRoute = locations.pathname

  const menuListData = [
    {
      label: "首页",
      key: "/home",
      icon: <HomeOutlined />,
    },
    {
      label: "文章",
      key: "/article",
      icon: <EditOutlined />,
    },
    {
      label: "出版",
      key: "/publish",
      icon: <DiffOutlined />,
    },
  ]
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">user.name</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            selectedKeys={[currentRoute]}
            onClick={onMenuClick}
            items={menuListData}
            style={{ height: "100%", borderRight: 0 }}
          />
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default GeekLayout
