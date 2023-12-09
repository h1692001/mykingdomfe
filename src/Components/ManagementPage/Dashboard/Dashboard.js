import React, { useState } from 'react';
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { GoHomeFill } from 'react-icons/go';

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Trở lại trang chủ', '/', <GoHomeFill />),
  getItem('Quản lí nhãn hàng', '/admin' + '', <PieChartOutlined />),
  getItem('Quản lí danh mục', '/admin' + '/managecategory', <DesktopOutlined />),
  getItem('Quản lí sản phẩm', '/admin' + '/manageproduct', <FileOutlined />),
  getItem('Quản lí đơn hàng', '/admin' + '/managebill', <FileOutlined />),
  getItem('Quản lí đợt sale', '/admin' + '/managesale', <FileOutlined />),
  getItem('Quản lí bài đăng', '/admin' + '/managePost ', <FileOutlined />),
  getItem('Thống kê doanh thu', '/admin/statistic' + '', <PieChartOutlined />),
];
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('persist:auth'))?.isLoggedIn === 'false') {
      navigate('/');
    }
  }, []);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <Menu
          theme="dark"
          defaultSelectedKeys={['']}
          mode="inline"
          items={items}
          onClick={(item, key, keyPath, domEvent) => {
            navigate(item.key);
          }}
        />
      </Sider>
      <Layout>
        <Content>
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
