import React, { useState } from 'react';
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { GoHomeFill } from 'react-icons/go';
import UserInfo from "./UserInfo";
import BillHistory from "./BillHistory";
import LikedProduct from "./LikedProduct";

const UserProfile = () => {
    const navigate = useNavigate();
    const [tab, setTab] = useState(1);
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
        getItem('Thông tin tài khoản', '1', <GoHomeFill />),
        getItem('Lịch sử mua hàng', '2', <PieChartOutlined />),
        getItem('Sản phẩm đã thích', '3', <PieChartOutlined />),
    ];

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('persist:auth'))?.isLoggedIn === 'false') {
            navigate('/');
        }
    }, []);

    return <div className="flex justify-center">
        <div className="max-w-[1330px] w-full" style={{ width: '1330px', padding: '40px 0' }}>
            <Layout
            >
                <Sider>
                    <Menu
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        items={items}
                        onClick={(item, key, keyPath, domEvent) => {
                            setTab(item.key);
                        }}
                        style={{
                            padding: '10px',
                            minWidth: '300px'
                        }}
                    />
                </Sider>
                <Layout>
                    <Content style={{ backgroundColor: 'white' }}>
                        {tab === 1 && <UserInfo></UserInfo>}
                        {tab === 2 && <BillHistory></BillHistory>}
                        {tab === 3 && <LikedProduct></LikedProduct>}
                    </Content>
                </Layout>
            </Layout>
        </div>
    </div>
}

export default UserProfile;