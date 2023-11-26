import React, { useEffect, useState } from 'react';
import './Header.scss';
import IconPhone from '../../Assets/Images/Icons/icon_phone.png';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/actions/authAction';

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const { isLoggedIn, userCurrent } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= 125) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const navigate = useNavigate();
  const Register = () => {
    navigate('/guest/register');
  };
  const Login = () => {
    navigate('/guest/login');
  };

  const newProduct = () => {
    navigate('/guest/allProduct');
  };
  return (
    <>
      <div className="Header_One_Container">
        <div className="Header_One">
          <div className="Header_One_Left">
            <img
              src={IconPhone}
              alt=""
              style={{
                height: '18px',
                width: '18px',
                marginTop: '3px',
              }}
            />
            <div className="Header_One_Left_Text">HOTLINE: 19001208</div>
          </div>
          <div className="Header_One_Right">
            <div className="Header_One_Right_Icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <div className="Header_One_Right_Text">Hệ thống 246 cửa hàng mykingdom</div>
          </div>
        </div>
      </div>
      <div className="Header_Two_Container">
        <div className="Header_Two">
          <div className="Header_Two_Logo"></div>
          <div className="flex items-center h-[40px] shadow-2xl">
            <input className="h-full  px-[20px] w-[400px] outline-none" placeholder="Tìm kiếm sản phẩm ..."></input>
            <div className="px-[40px] text-[22px] bg-[#f7f9fa] h-full flex items-center text-primary">
              <CiSearch className="" />
            </div>
          </div>
          <div className="Header_Two_Content">
            <div className="Header_Two_Content_Membership">
              <div className="Header_Two_Content_Membership_Icon">
                <i class="fa fa-bookmark-o" aria-hidden="true" style={{ fontSize: '30px', marginTop: '35px' }}></i>
              </div>
              <div className="Header_Two_Content_Membership_Text">KHTT</div>
            </div>
            <div className="Header_Two_Content_Account" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="Header_Two_Content_Account_Icon">
                <i class="fa fa-user-circle-o" aria-hidden="true" style={{ fontSize: '30px', marginTop: '35px' }}></i>
              </div>
              <div className="Header_Two_Content_Account_Text">
                <div className="Account">TÀI KHOẢN</div>
                {isHovered && !isLoggedIn && (
                  <ul className="Header_Two_Content_Account_Options">
                    <li onClick={Register}>Đăng ký tài khoản</li>
                    <li onClick={Login}>Đăng nhập</li>
                  </ul>
                )}

                {isHovered && isLoggedIn && (
                  <ul className="Header_Two_Content_Account_Options">
                    <li className="">Tài khoản</li>
                    <li>Tình trạng đơn hàng</li>
                    {userCurrent?.role === 'ADMIN' && (
                      <li
                        onClick={() => {
                          navigate('/admin');
                        }}
                      >
                        Quản lí
                      </li>
                    )}
                    <li
                      onClick={() => {
                        dispatch(logout());
                      }}
                    >
                      Đăng xuất
                    </li>
                  </ul>
                )}
              </div>
            </div>

            <div className="Header_Two_Content_Cart">
              <div className="Header_Two_Content_Cart_Icon">
                <i class="fa fa-cart-arrow-down" aria-hidden="true" style={{ fontSize: '30px', marginTop: '35px' }}></i>
              </div>
              <div className="Header_Two_Content_Cart_Text">GIỎ HÀNG</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Main_Menucontent_Container" style={{ top: isFixed ? '0' : '300px', position: isFixed ? 'fixed' : 'static' }}>
        <div className="Main_Menucontent">
          <div className="New_Product">
            <span onClick={newProduct}>HÀNG MỚI</span>
          </div>
          <div className="Product">
            <span>SẢN PHẨM</span>
          </div>
          <div className="Gender">
            <span>GIỚI TÍNH</span>
          </div>
          <div className="Age">
            <span>ĐỘ TUỔI</span>
          </div>
          <div className="TradeMark">
            <span>THƯƠNG HIỆU</span>
          </div>
          <div className="Promotion">
            <span>KHUYẾN MÃI</span>
          </div>
          <div className="Outstanding_Campaign">
            <span>CHIẾN DỊCH NỔI BẬT</span>
          </div>
          <div className="Member_Incentives">
            <span>ƯU ĐÃI THÀNH VIÊN</span>
          </div>
          <div className="Handbook">
            <span>CẨM NANG</span>
          </div>
        </div>
      </div>
    </>
  );
}
