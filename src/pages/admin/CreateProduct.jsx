import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useEffect, useState } from 'react';
import CategoryApi from '../../api/CategoryApi';
import BrandApi from '../../api/BrandApi';
import ProductApi from "../../api/ProductApi";
import { Space, Table, Spin, Button, Modal, Input, Select } from 'antd';
import Swal from 'sweetalert2';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Quill from 'quill';

const { Header } = Layout;

const CreateProduct = () => {
    const [brand, setBrand] = useState();
    const [category, setCategory] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [newProduct, setNewProduct] = useState({
    });
    const createProduct = async () => {
        try {
            const formData = new FormData();
            formData.append('name', newProduct.name);
            formData.append('SKU', newProduct.SKU);
            formData.append('price', newProduct.price);
            formData.append('saleOff', newProduct.saleOff);
            formData.append('amount', newProduct.amount);
            formData.append('topic', newProduct.topic);
            formData.append('madeIn', newProduct.madeIn);
            formData.append('VTId', newProduct.vtid);
            formData.append('age', newProduct.age);
            formData.append('gender', newProduct.gender);
            formData.append('category', newProduct.category);
            formData.append('brand', newProduct.brand);
            if (newProduct.images) {
                for (let i = 0; i < newProduct.images.length; i++) {
                    formData.append('images', newProduct.images[i]);
                }
            }
            formData.append('des', newProduct.des);

            setIsLoading(true);
            await ProductApi.createProduct(formData);
            setIsLoading(false);
            setNewProduct({
            });

        } catch (error) {
            setIsLoading(false);
            Swal.fire("Error", 'Error creating category', "error");
        }
    };


    const fetchBrand = async () => {
        const res = await BrandApi.getAllBrand();
        const brandOption = [];
        res.forEach(dt => {
            brandOption.push({
                value: dt.id,
                label: dt.name,
            })
        })
        setBrand(brandOption);
    }
    const fetchCategory = async () => {
        const res = await CategoryApi.getAllCategory();
        const categoryOption = [];
        res.forEach(dt => {
            categoryOption.push({
                value: dt.id,
                label: dt.name,
            })
        })
        setCategory(categoryOption);
    }

    useEffect(() => {
        fetchBrand();
        fetchCategory();

    }, [])

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
            }}>Create Product</p>
        </Header>

        <div style={{ margin: '0 20px' }}>
            <div style={{ display: "flex", justifyContent: "space-around", gap: '30px' }}>
                <div style={{ marginTop: '20px', width: "100%" }}>
                    <p style={{ marginBottom: '10px', fontWeight: '500', fontSize: '16px' }}>Product's name</p>
                    <Input
                        value={newProduct?.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    />
                </div>
                <div style={{ marginTop: '20px', width: "100%" }}>
                    <p style={{ marginBottom: '10px', fontWeight: '500', fontSize: '16px' }}>SKU</p>
                    <Input
                        value={newProduct?.SKU}
                        onChange={(e) => setNewProduct({ ...newProduct, SKU: e.target.value })}
                    />
                </div>
                <div style={{ marginTop: '20px', width: "100%" }}>
                    <p style={{ marginBottom: '10px', fontWeight: '500', fontSize: '16px' }}>Price</p>
                    <Input
                        value={newProduct?.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    />
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-around", gap: '30px' }}>

                <div style={{ marginTop: '20px', width: "100%" }}>
                    <p style={{ marginBottom: '10px', fontWeight: '500', fontSize: '16px' }}>Sale off</p>
                    <Input
                        value={newProduct?.saleOff}
                        onChange={(e) => setNewProduct({ ...newProduct, saleOff: e.target.value })}
                    />
                </div>
                <div style={{ marginTop: '20px', width: "100%" }}>
                    <p style={{ marginBottom: '10px', fontWeight: '500', fontSize: '16px' }}>Amount</p>
                    <Input
                        value={newProduct?.amount}
                        onChange={(e) => setNewProduct({ ...newProduct, amount: e.target.value })}
                    />
                </div>
                <div style={{ marginTop: '20px', width: "100%" }}>
                    <p style={{ marginBottom: '10px', fontWeight: '500', fontSize: '16px' }}>Topic</p>
                    <Input
                        value={newProduct?.topic}
                        onChange={(e) => setNewProduct({ ...newProduct, topic: e.target.value })}
                    />
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-around", gap: '30px' }}>

                <div style={{ marginTop: '20px', width: "100%" }}>
                    <p style={{ marginBottom: '10px', fontWeight: '500', fontSize: '16px' }}>Made in</p>
                    <Input
                        value={newProduct?.madeIn}
                        onChange={(e) => setNewProduct({ ...newProduct, madeIn: e.target.value })}
                    />
                </div>
                <div style={{ marginTop: '20px', width: "100%" }}>
                    <p style={{ marginBottom: '10px', fontWeight: '500', fontSize: '16px' }}>Mã VT</p>
                    <Input
                        value={newProduct?.vtid}
                        onChange={(e) => setNewProduct({ ...newProduct, vtid: e.target.value })}
                    />
                </div>
                <div style={{ marginTop: '20px', width: "100%" }}>
                    <p style={{ marginBottom: '10px', fontWeight: '500', fontSize: '16px' }}>Age</p>
                    <Input
                        value={newProduct?.age}
                        onChange={(e) => setNewProduct({ ...newProduct, age: e.target.value })}
                    />
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-around", gap: '30px' }}>

                <div style={{ marginTop: '20px', width: "100%" }}>
                    <p style={{ marginBottom: '10px', fontWeight: '500', fontSize: '16px' }}>Gender</p>
                    <Input
                        value={newProduct?.gender}
                        onChange={(e) => setNewProduct({ ...newProduct, gender: e.target.value })}
                    />
                </div>
                <div style={{ marginTop: '20px', width: "100%" }}>
                    <p style={{ marginBottom: '10px', fontWeight: '500', fontSize: '16px' }}>Category</p>
                    <Select
                        showSearch
                        placeholder="Select a category"
                        optionFilterProp="children"
                        onChange={(value) => { setNewProduct({ ...newProduct, category: value }) }}
                        filterOption={filterOption}
                        options={category}
                    />
                </div>
                <div style={{ marginTop: '20px', width: "100%" }}>
                    <p style={{ marginBottom: '10px', fontWeight: '500', fontSize: '16px' }}>Brand</p>
                    <Select
                        showSearch
                        placeholder="Select a brand"
                        optionFilterProp="children"
                        onChange={(value) => { setNewProduct({ ...newProduct, brand: value }) }}
                        filterOption={filterOption}
                        options={brand}
                    />
                </div>
            </div>

            <div style={{ marginTop: '20px' }}>
                <p style={{ marginBottom: '10px', fontWeight: '500', fontSize: '16px' }}>Images of product</p>
                <div style={{}}>
                    <input type="file" multiple onChange={(e) => setNewProduct({ ...newProduct, images: e.target.files })} />
                </div>
            </div>

            <div style={{ marginTop: '20px' }}>
                <p style={{ marginBottom: '10px', fontWeight: '500', fontSize: '16px' }}>Description</p>
                <div style={{ backgroundColor: 'white' }}>
                    <ReactQuill
                        theme="snow"
                        value={newProduct.des}
                        onChange={(e) => { setNewProduct({ ...newProduct, des: e }) }}
                        modules={{
                            toolbar: [
                                ['bold', 'italic', 'underline', 'strike'],
                                ['blockquote', 'code-block'],
                                ['link', 'image'],
                                [{ 'header': 1 }, { 'header': 2 }],
                                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                [{ 'script': 'sub' }, { 'script': 'super' }],
                                [{ 'indent': '-1' }, { 'indent': '+1' }],
                                [{ 'direction': 'rtl' }],

                                [{ 'size': ['small', false, 'large', 'huge'] }],
                                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                                [{ 'color': [] }, { 'background': [] }],
                                [{ 'font': [] }],
                                [{ 'align': [] }],

                                ['clean']
                            ],

                        }}
                    />
                </div>
            </div>
        </div>

        <div style={{ marginTop: '20px', padding: '0 20px', display: 'flex', justifyContent: 'end' }}>
            <Button type="primary" style={{
                backgroundColor: "blue"
            }} onClick={() => { createProduct() }}>Create</Button>
        </div>
    </>
}

export default CreateProduct;