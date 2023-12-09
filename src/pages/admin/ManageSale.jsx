import { Breadcrumb, Layout, Menu, theme, DatePicker } from 'antd';
import { useEffect, useState } from 'react';
import BrandApi from '../../api/BrandApi';
import CategoryApi from '../../api/CategoryApi';
import { Space, Table, Spin, Button, Modal, Input, Select } from 'antd';
import Swal from 'sweetalert2';
const { Header } = Layout;
const { RangePicker } = DatePicker;

const ManageSale = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
    const [editProduct, setEditProduct] = useState({});
    const [category, setCategory] = useState([]);
    const [newBrand, setNewBrand] = useState({
        logo: null,
        name: '',
        comeFrom: '',
    });

    const columns = [
        {
            title: 'Ảnh bìa',
            dataIndex: 'logo',
            key: 'logo',
            render: (text) => <img src={text} style={{
                width: '108px',
                height: "54px",
                objectFit: 'cover'
            }} alt='logo'></img>,
        },
        {
            title: 'Tên đợt khuyến mãi',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '% Giảm giá',
            dataIndex: 'sale',
            key: 'sale',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Từ ngày',
            dataIndex: 'comeFrom',
            key: 'comeFrom',
        },
        {
            title: 'Đến ngày',
            dataIndex: 'comeFrom',
            key: 'comeFrom',
        },
        {
            title: 'Áp dụng cho',
            dataIndex: 'comeFrom',
            key: 'comeFrom',
        },
        {
            title: '',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" style={{
                        backgroundColor: "green !important"
                    }}
                        onClick={() => {
                            setEditProduct(record);
                            setIsModalOpenEdit(true);
                        }}>Chỉnh sửa</Button>
                </Space>
            ),
        },
    ];

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        createBrand();
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const res = await BrandApi.getAllBrand();
            console.log(res);
            const res2 = await CategoryApi.getAllCategory();
            setData(res);
            const categoryOption = [];
            res2.forEach(dt => {
                categoryOption.push({
                    value: dt.id,
                    label: dt.name
                })
            })
            setCategory(categoryOption);
            setIsLoading(false);
        } catch (e) {
            setIsLoading(false);
        }
    }

    const createBrand = async () => {
        try {
            const formData = new FormData();
            formData.append('logo', newBrand.logo);
            formData.append('name', newBrand.name);
            formData.append('comeFrom', newBrand.comeFrom);
            formData.append('category', newBrand.category);

            setIsLoading(true);
            await BrandApi.createBrand(formData);
            setIsLoading(false);
            fetchData();
            setIsModalOpen(false);
            setNewBrand({
                logo: null,
                name: '',
                comeFrom: '',
                category: "",
            });

            const fileInput = document.getElementById('logoInput');
            fileInput.value = '';
            fileInput.type = 'file';

        } catch (error) {
            setIsLoading(false);
            Swal.fire("Error", 'Error creating brand', "error");
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    const onChange = (value) => {
        setNewBrand({ ...newBrand, category: value });
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
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
            }}>Quản lí Khuyến mãi</p>
            <Button type="primary" style={{
                backgroundColor: "blue"
            }} onClick={showModal}>Thêm đợt Khuyến mãi</Button>
        </Header>
        <Spin spinning={isLoading}>
            <div style={{
                margin: "0px 20px"
            }}>
                <Table columns={columns} dataSource={data} rowKey={'logo'} />
            </div>
        </Spin>
        <Modal title="Thêm đợt khuyến mãi" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Spin spinning={isLoading}>
                <div style={{ marginTop: '20px' }}>
                    <p style={{ marginBottom: '10px', fontWeight: '500', fontSize: '16px' }}>Ảnh bìa</p>
                    <input
                        type='file'
                        id="logoInput"
                        onChange={(e) => setNewBrand({ ...newBrand, logo: e.target.files[0] })}
                    />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <p style={{ marginBottom: '10px', fontWeight: '500', fontSize: '16px' }}>Tên đợt khuyến mãi</p>
                    <Input
                        value={newBrand.name}
                        onChange={(e) => setNewBrand({ ...newBrand, name: e.target.value })}
                    />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <p style={{ marginBottom: '10px', fontWeight: '500', fontSize: '16px' }}>% Giảm giá</p>
                    <Input
                        value={newBrand.comeFrom}
                        onChange={(e) => setNewBrand({ ...newBrand, comeFrom: e.target.value })}
                    />
                </div>

                <div style={{ marginTop: '20px' }}>
                    <p style={{ marginBottom: '10px', fontWeight: '500', fontSize: '16px' }}>Áp dụng cho</p>
                    <Select
                        showSearch
                        mode="multiple"
                        placeholder="Select a category"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={filterOption}
                        options={category}
                    />
                </div>

            </Spin>
        </Modal>

        <Modal title="Edit brand" open={isModalOpenEdit} onOk={() => {

        }} onCancel={() => { setIsModalOpenEdit(false) }}>
            <Spin spinning={isLoading}>
                <div style={{ marginTop: '20px' }}>
                    <p style={{ marginBottom: '10px', fontWeight: '500', fontSize: '16px' }}>Logo</p>
                    <input
                        type='file'
                        id="logoInput"
                        onChange={(e) => setNewBrand({ ...newBrand, logo: e.target.files[0] })}
                    />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <p style={{ marginBottom: '10px', fontWeight: '500', fontSize: '16px' }}>Brand's name</p>
                    <Input
                        value={newBrand.name}
                        onChange={(e) => setNewBrand({ ...newBrand, name: e.target.value })}
                    />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <p style={{ marginBottom: '10px', fontWeight: '500', fontSize: '16px' }}>Come from</p>
                    <Input
                        value={newBrand.comeFrom}
                        onChange={(e) => setNewBrand({ ...newBrand, comeFrom: e.target.value })}
                    />
                </div>

                <div style={{ marginTop: '20px' }}>
                    <p style={{ marginBottom: '10px', fontWeight: '500', fontSize: '16px' }}>Category</p>
                    <Select
                        showSearch
                        placeholder="Select a category"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={filterOption}
                        options={category}
                    />
                </div>

            </Spin>
        </Modal>
    </>
}

export default ManageSale;
