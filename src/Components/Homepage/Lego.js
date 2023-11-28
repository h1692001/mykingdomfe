import React from 'react';
import './Lego.scss';
import ProductApi from '../../api/ProductApi';
import { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import './SpecialSale.scss';
import { formatCurrency } from '../../utils/convertPrice';
import { Link } from 'react-router-dom';

export default function Lego({ cate }) {
  const [data, setData] = useState([]);
  const fetchProduct = async () => {
    const res = await ProductApi.getByCategory(cate.id);
    setData(res);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="Lego_Container">
      <div className="Lego">
        <div className="Lego_Header">
          <div className="Lego_Header_Title">{cate.name}</div>
          {cate.brands?.map((br, i) => {
            if (i < 5) return <div className="Lego_Header_NinjaGo">{br.name}</div>;
          })}
        </div>
        <div style={{ marginTop: '20px' }}></div>
        <div className="SpecialSale_Container">
          <div className="SpecialSale">
            <div className="SpecialSale_Product">
              <Carousel autoplay dotPosition={'bottom'} slidesToShow={data.length > 4 ? 4 : data.length}>
                {data.map((dt) => {
                  return (
                    <Link to={'/detailProduct/' + dt.id} className="SpecialSale_ProductItem" key={dt.id}>
                      <div
                        className="SpecialSale_ProductItem_Image"
                        style={{
                          backgroundImage: `url(${dt.images[0]})`,
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundImage = `url(${dt.images[1] ? dt.images[1] : dt.images[0]})`)}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundImage = `url(${dt.images[0]})`)}
                      ></div>
                      <div style={{ padding: '10px 10px 0 10px' }}>
                        <div className="SpecialSale_ProductItem_NameProduct">{dt.name}</div>
                        <div className="SpecialSale_ProductItem_ProductCode">SKU: {dt.sku}</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
                          <div className="SpecialSale_ProductItem_Price">{formatCurrency(dt.price - (dt.price * dt.saleOff) / 100)} VNĐ</div>
                          <div style={{ color: '#444', fontSize: '12px', textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontWeight: '600' }}>{formatCurrency(dt.price)} VNĐ</div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
