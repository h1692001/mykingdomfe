import React from 'react';
import './ToyManual.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'block', background: '#ccc', fontSize: '20px' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'block', background: '#ccc', fontSize: '20px' }} onClick={onClick} />;
}
export default function ToyManual() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="ToyManual_Container">
      <div className="ToyManual">
        <div className="ToyManual_Header">
          <h2 >CẨM NANG ĐỒ CHƠI</h2>
          <h3 className="ToyManual_Header_Title">>>XEM TẤT CẢ</h3>
        </div>
        <div style={{ marginTop: '20px' }}></div>
        <div className="ToyManual_Content">
          <Slider {...settings}>
            <div className="ToyManual_ProductItem">
              <div className="ToyManual_Image"></div>
              <div className="ToyManual_ProductItem_NameProduct">Tổng hợp những trò chơi cho bé từ 12-18 tháng tuổi ngay tại nhà</div>
              <div className="ToyManual_ProductItem_Content">
                Robot Transformers không chỉ giúp trẻ em có những giờ chơi vui vẻ mà còn mang đến nhiều lợi ích cho sự phát triển của trẻ. Cùng khám phá 4 lợi ích đồ chơi Transformers với trẻ dưới đây
                nhé.
              </div>
              <div className="ToyManual_ProductItem_SeeMore">XEM THÊM</div>
            </div>
            <div className="ToyManual_ProductItem">
              <div className="ToyManual_Image"></div>
              <div className="ToyManual_ProductItem_NameProduct">Tổng hợp những trò chơi cho bé từ 12-18 tháng tuổi ngay tại nhà</div>
              <div className="ToyManual_ProductItem_Content">
                Robot Transformers không chỉ giúp trẻ em có những giờ chơi vui vẻ mà còn mang đến nhiều lợi ích cho sự phát triển của trẻ. Cùng khám phá 4 lợi ích đồ chơi Transformers với trẻ dưới đây
                nhé.
              </div>
              <div className="ToyManual_ProductItem_SeeMore">XEM THÊM</div>
            </div>
            <div className="ToyManual_ProductItem">
              <div className="ToyManual_Image"></div>
              <div className="ToyManual_ProductItem_NameProduct">Tổng hợp những trò chơi cho bé từ 12-18 tháng tuổi ngay tại nhà</div>
              <div className="ToyManual_ProductItem_Content">
                Robot Transformers không chỉ giúp trẻ em có những giờ chơi vui vẻ mà còn mang đến nhiều lợi ích cho sự phát triển của trẻ. Cùng khám phá 4 lợi ích đồ chơi Transformers với trẻ dưới đây
                nhé.
              </div>
              <div className="ToyManual_ProductItem_SeeMore">XEM THÊM</div>
            </div>
            <div className="ToyManual_ProductItem">
              <div className="ToyManual_Image"></div>
              <div className="ToyManual_ProductItem_NameProduct">Tổng hợp những trò chơi cho bé từ 12-18 tháng tuổi ngay tại nhà</div>
              <div className="ToyManual_ProductItem_Content">
                Robot Transformers không chỉ giúp trẻ em có những giờ chơi vui vẻ mà còn mang đến nhiều lợi ích cho sự phát triển của trẻ. Cùng khám phá 4 lợi ích đồ chơi Transformers với trẻ dưới đây
                nhé.
              </div>
              <div className="ToyManual_ProductItem_SeeMore">XEM THÊM</div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
