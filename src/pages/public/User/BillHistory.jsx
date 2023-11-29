import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useEffect, useState } from 'react';
import { Space, Table, Spin, Button, Modal, Input, Select } from 'antd';
import BillApi from "../../../api/BillApi";
import { useSelector } from 'react-redux';
const BillHistory = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { userCurrent } = useSelector(state => state.auth);
    const fetchData = async () => {
        try {
            setIsLoading(true);
            const res = await BillApi.getAllBillByUserId(userCurrent?.id);
            setData(res);
            setIsLoading(false);
        } catch (e) {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, [userCurrent])

    const columns = [
        {
            title: 'Họ và tên',
            dataIndex: 'name',
            key: 'name',
            width: '10%'
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone',
            width: '10%'
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
            width: '20%'
        },
        {
            title: 'Phương thức thanh toán',
            dataIndex: 'paymentMethod',
            key: 'paymentMethod',
        },
        {
            title: 'Mã giao dịch',
            dataIndex: 'paymentCode',
            key: 'paymentCode',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Ngày tạo hóa đơn',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (data) => {
                const date = new Date(data);
                const minutes = date.getMinutes();
                const hours = date.getHours();
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();

                return (
                    <p>{`${minutes}-${hours} | ${day}-${month}-${year}`}</p>
                );
            }
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                return (
                    <Space size="middle">
                        <Button type="primary" style={{
                            backgroundColor: "green !important"
                        }}>Xem chi tiết</Button>
                    </Space>
                )
            },
        },
    ];
    return <>
        <Spin spinning={isLoading}>
            <div style={{
                margin: "0px 20px"
            }}>
                <Table columns={columns} dataSource={data} rowKey={'logo'} />
            </div>
        </Spin>
    </>
}

export default BillHistory;