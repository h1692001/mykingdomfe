import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useEffect, useState } from 'react';
import BillApi from '../../api/BillApi';
import { Space, Table, Spin, Button, Modal, Input, Select } from 'antd';
import Swal from 'sweetalert2';
const { Header } = Layout;
const ManageBill = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const changeStatus = async (id, status) => {
        try {
            setIsLoading(true);
            const res = await BillApi.changeStatusBill({
                id: id,
                status: status
            })
            fetchData();
            setIsLoading(false);
        }
        catch (e) {
            setIsLoading(false);
        }
    }
    const fetchData = async () => {
        try {
            setIsLoading(true);
            const res = await BillApi.getAllBill();
            setData(res);
            setIsLoading(false);
        } catch (e) {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

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
                        {record.status === "PENDING" && <Button type="primary" style={{
                            backgroundColor: "green !important"
                        }} onClick={() => {
                            changeStatus(record.id, "PREPARING")
                        }}>{record.status === "PENDING" && "Xác nhận đơn"}</Button>}
                        {
                            record.status === "PENDING" && <Button type="error" style={{
                                backgroundColor: "red !important",
                                color: 'white'
                            }}
                                onClick={() => {
                                    changeStatus(record.id, "CANCELED")
                                }}>{"Hủy đơn"}</Button>
                        }
                        {
                            record.status === "PREPARING" && <Button type="primary" style={{
                                backgroundColor: "red !important",
                                color: 'white'
                            }}
                                onClick={() => {
                                    changeStatus(record.id, "SHIPPING")
                                }}>{"Giao đơn"}</Button>
                        }
                        {
                            record.status === "SHIPPING" && <Button type="primary" style={{
                                backgroundColor: "red !important",
                                color: 'white'
                            }}
                                onClick={() => {
                                    changeStatus(record.id, "COMPLETED");
                                }}>{"Hoàn thành"}</Button>
                        }
                    </Space>
                )
            },
        },
    ];
    return <>
        <Header
            style={{
                padding: '0 20px',
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "white",
            }}
        >
            <p className='' style={{
                fontSize: '18px',
                fontWeight: 'bold',
            }}>Manage Bill</p>
        </Header>
        <Spin spinning={isLoading}>
            <div style={{
                margin: "0px 20px"
            }}>
                <Table columns={columns} dataSource={data} rowKey={'logo'} />
            </div>
        </Spin>
    </>
}

export default ManageBill;
