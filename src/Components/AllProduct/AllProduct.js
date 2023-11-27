import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { Breadcrumb, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import CategoryApi from '../../api/CategoryApi';
import BrandApi from '../../api/BrandApi';
import { useState, useEffect } from 'react';
import ProductApi from '../../api/ProductApi';
import { Slider, InputNumber, Input, Radio } from 'antd';
import { formatCurrency } from '../../utils/convertPrice';
import '../Homepage/SpecialSale.scss';
import ProductCard from '../ManagementPage/Product/ProductCard';

export default function AllProduct() {
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [product, setProduct] = useState();
  const [selectedBrand, setSelectedBrand] = useState();
  const [sortedProduct, setSortedProduct] = useState();
  const [searchBrand, setSearchBrand] = useState();
  const [targetPrice, setTargetPrice] = useState([10000, 10000000]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [sort, setSort] = useState('');
  const fetchCategory = async () => {
    try {
      const res = await CategoryApi.getAllCategory();
      setCategory(res);
    } catch (e) {}
  };
  const fetchProduct = async () => {
    try {
      const res = await ProductApi.getAllProduct();
      setProduct(res);
      setSortedProduct(res);
    } catch (e) {}
  };
  const fetchBrand = async () => {
    try {
      const res = await BrandApi.getAllBrand();
      const br = [];
      res.forEach((dt) => {
        br.push({
          label: dt.name,
          value: dt.id,
        });
      });
      setBrand(br);
      setSearchBrand(br);
    } catch (e) {}
  };
  useEffect(() => {
    fetchCategory();
    fetchBrand();
    fetchProduct();
  }, []);
  return (
    <>
      <div className="AllProduct flex justify-center">
        <div style={{ maxWidth: '1330px', width: '100%' }}>
          <div className="AllProduct_Title" style={{ margin: '18px 0 25px 0' }}>
            <Breadcrumb items={[{ title: <Link>Trang chủ</Link> }, { title: 'Danh mục' }]} style={{ backgroundColor: '#f6f6f8', padding: '6px 10px' }}></Breadcrumb>
          </div>

          <div className="flex">
            <div style={{ width: '320px', padding: '0px 10px' }}>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '600' }}>DANH MỤC</p>
                <div style={{ padding: '15px 0px' }}>
                  {category?.map((cate) => {
                    return (
                      <p key={cate.id} style={{ color: '#444', fontSize: '14px', paddingBottom: '10px', marginTop: '4px', borderBottom: '1px solid #ededed', width: '100%' }}>
                        {cate?.name}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '600' }}>GIÁ</p>
                <div style={{ padding: '15px 0px' }}>
                  <div className="flex">
                    <InputNumber
                      min={10000}
                      max={10000000}
                      style={{
                        margin: '0 16px',
                        width: '120px',
                      }}
                      value={targetPrice[0]}
                      formatter={(value) => {
                        return formatCurrency(value) + ' VND';
                      }}
                      onChange={(e) => {
                        // setTargetPrice((prev) => {
                        //   const newPR = [...prev];
                        //   newPR[0] = e;
                        //   return newPR;
                        // });
                      }}
                    />
                    <InputNumber
                      min={10000}
                      max={10000000}
                      style={{
                        margin: '0 16px',
                        width: '140px',
                      }}
                      value={targetPrice[1]}
                      formatter={(value) => {
                        return formatCurrency(value) + ' VND';
                      }}
                      onChange={(e) => {}}
                    />
                  </div>
                  <Slider
                    min={10000}
                    max={10000000}
                    defaultValue={[10000, 10000000]}
                    onChange={(e) => {
                      setTargetPrice(e);
                    }}
                    value={targetPrice}
                    range
                    tooltip={{
                      formatter: (value) => {
                        return formatCurrency(value) + ' VND';
                      },
                    }}
                  />
                </div>
              </div>

              <div>
                <p style={{ fontSize: '14px', fontWeight: '600' }}>TUỔI</p>
                <div style={{ padding: '15px 0px' }}>
                  <Checkbox.Group
                    style={{
                      display: 'grid',
                      gap: '10px',
                    }}
                    options={[
                      { label: '12 tuổi trở lên', value: 1 },
                      { label: '6-12 tuổi', value: 2 },
                      { label: '3-6 tuổi', value: 3 },
                      { label: '1-3 tuổi', value: 4 },
                      { label: '0-12 tháng', value: 5 },
                    ]}
                    onChange={(e) => {
                      console.log(e);
                    }}
                  />
                </div>
              </div>

              <div>
                <p style={{ fontSize: '14px', fontWeight: '600' }}>GIỚI TÍNH</p>
                <div style={{ padding: '15px 0px' }}>
                  <Checkbox.Group
                    style={{
                      display: 'grid',
                      gap: '10px',
                    }}
                    options={[
                      { label: 'Nam', value: 1 },
                      { label: 'Nữ', value: 2 },
                      { label: 'Unisex', value: 3 },
                    ]}
                    onChange={(e) => {
                      setSelectedGender(e);
                    }}
                  />
                </div>
              </div>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '600' }}>THƯƠNG HIỆU</p>
                <div style={{ padding: '15px 0px' }}>
                  <Input
                    placeholder="Search brand"
                    style={{ marginBottom: '10px' }}
                    onChange={(e) => {
                      setSearchBrand((prev) => {
                        const newPre = brand.filter((dt) => dt.label.includes(e.target.value));

                        return newPre;
                      });
                    }}
                  ></Input>

                  <Checkbox.Group
                    style={{
                      display: 'grid',
                      gap: '10px',
                    }}
                    options={searchBrand}
                    onChange={(e) => {
                      setSelectedBrand(e);
                    }}
                  />
                </div>
              </div>
            </div>
            <div style={{}} className="flex-auto">
              <div className="flex justify-end w-full">
                <div className="flex gap-[10px] items-center">
                  <p>Sắp xếp theo:</p>
                  <Radio.Group
                    onChange={() => {}}
                    style={{
                      marginBottom: 8,
                    }}
                  >
                    <Radio.Button value="ASC">Giá cao đến thấp</Radio.Button>
                    <Radio.Button value="DESC">Giá thấp đến cao</Radio.Button>
                  </Radio.Group>
                </div>
              </div>

              <div className="flex flex-wrap gap-[20px]">
                {sortedProduct?.map((dt) => {
                  return <ProductCard dt={dt}></ProductCard>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
